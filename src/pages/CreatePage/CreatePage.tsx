import styles from './CreatePage.module.scss'
import Header from '../../components/Header/Header';
import ThumbnailSet from './sub/Thumbnail/ThumbnailSet';
import WriteContent from './sub/WriteContent'
import ButtonComponent from '../../components/Global/ButtonComponent';
import {CreateData} from './CreateDataInterface';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {MapTextNodeWithIndex, PostSpaceMapping} from '../../components/Global/MapTextNodeWithIndex';
import createElementByRecursion from '../../components/Global/PostHtmlParser'
import axios from 'axios'
import {TextIndexMap} from '../../components/Global/MapTextNodeWithIndex'
import NPObserver from '../../components/Global/NetworkProgressObserver';


function CreatePage() {

	const queryClient = useQueryClient()

	type MapData = {
		paragraphTemplate: string,
		textSpacemap: TextIndexMap
	}

	type FormDataToJson = {
		[key: string]:FormDataEntryValue
	}

	const navigate = useNavigate();

	const sleep = () => {
		return new Promise(resolve=>setTimeout(resolve, 3000))
	}

	const mutation = useMutation({
		mutationFn: async (data: FormData) => {
			//return axios.post('http://localhost:4000/reviewPosts', data)


			const formDataToJson:{[key:string]:FormDataEntryValue} = {}
			data.forEach((value, key)=>{
				formDataToJson[key] = value;
			})
			

			NPObserver.setNetworkInfo(data.get('mainTitle') as string, data.get('thumbnailImage') as File, 0)
			NPObserver.registerTimeStamp(Date.now());


			// -------------dev----------------
			// return axios.post('https://aniview-server-chiaf.run.goorm.site/reviewPosts', formDataToJson, {
			// 	onUploadProgress: (progressEvent) => {
			// 		const percentage = Math.round((progressEvent.loaded / (progressEvent.total as number)) * 100)
			// 		NPObserver.updateNetworkPercentage(percentage);
			// 	},
			// })

			//-------------deploy-------------
			return axios.post("https://animation-view-fnlkc.run.goorm.site/create", data, {
				headers: {'Content-Type': 'multipart/form-data'},
				onUploadProgress: (progressEvent) => {
						const percentage = Math.round((progressEvent.loaded / (progressEvent.total as number)) * 100)
						NPObserver.updateNetworkPercentage(percentage);
					}
			})
		},
		mutationKey: 'create',
		onError: (e)=>{console.log(e)},
		// onMutate: (variables)=>{
		// 	navigate('/main')
		// },
		onSuccess: ()=>{
			NPObserver.succeedNetwork();
		}
	})
	
	const dispatchData = () => {
		const thumbnailImgFile = ((document.getElementById('thumbnailImage') as HTMLInputElement).files as FileList)[0]

		const contentArea = document.getElementById('contentArea') as HTMLElement;
		document.getElementById('texteditpalette')?.remove();

		for(let i = 0; i < contentArea.childElementCount; i++) contentArea.children[i].removeAttribute('class')

		const paragraphTemplateMapArray: MapData[] = [];
			document.getElementById('contentArea')?.childNodes.forEach((node: ChildNode, index: number)=>{
				if(node.nodeName !== "#text") {
					const textSpacemap: TextIndexMap = {0: ""}
					const copiedNode = node.cloneNode(true) as Element;
					MapTextNodeWithIndex(copiedNode as Element, textSpacemap);
					const mapData: MapData = {
						paragraphTemplate: copiedNode.outerHTML,
						textSpacemap: textSpacemap
					}
					paragraphTemplateMapArray.push(mapData)
				}
			})

		const formData = new FormData();

		formData.append('mainTitle', document.getElementById('mainTitle')?.textContent as string);
		formData.append('subTitle', document.getElementById('subTitle')?.textContent as string);
		formData.append('titleAlign', document.getElementById('thumbnailTitle')?.title as string);
		formData.append('thumbnailImage', thumbnailImgFile);
		formData.append('paragraphContents', JSON.stringify(paragraphTemplateMapArray));
		formData.append('userId', 'taehyeungkim98');
		
		mutation.mutate(formData)
	}

	


	return(
		<>
		<Header/>
		<div className={styles.contents}>
			<ThumbnailSet/>
			<WriteContent/>
		</div>
		<ButtonComponent className={styles.submit} children={<>제출</>} event={[['click', ()=>{
			
			dispatchData()
		}]]}/> 
		</>
	)
}

export default CreatePage;