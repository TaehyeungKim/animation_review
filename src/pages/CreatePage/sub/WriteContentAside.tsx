import React, {useState, useRef} from 'react'
import styles from './WriteContentAside.module.scss'

import {imageAdd} from '../../../icons/icons'
import ButtonComponent from '../../../components/Global/ButtonComponent';


interface WriteContentAsideProps {
    style: any;
}

function WriteContentAside({style}: WriteContentAsideProps) {

    const [inpArray, setInpArray] = useState<Array<any>>([]);

    const imageInp = useRef<HTMLInputElement>(null);
    const imageIdx = useRef<number>(0);

    const insertNewImgInp = () => {
        const newInp = React.createElement('input', {
            accept: "image/*",
            type: 'file',
            hidden: true,
            ref: imageInp,
            onChange: insertImageToContent,
            id: ++imageIdx.current,
            key: imageIdx.current,
            className: "imageInp"
        })
        setInpArray(inpArray=>[...inpArray, newInp])
    }
    
    
    
    
    const insertImageToContent = (e:any) => {
        const tempURL = URL.createObjectURL(e.target?.files[0]);
        const currentCaret = window.getSelection()?.anchorNode;
        const imageContainer = document.createElement('div'); imageContainer.setAttribute('class', `${style.imageContainer}`); 
        const image = document.createElement('img'); image.setAttribute('src', tempURL);
        imageContainer.appendChild(image);
        const marker = currentCaret?.nodeName === '#text' ? currentCaret.parentNode : currentCaret as Node
        document.getElementById('contentArea')?.insertBefore(imageContainer, marker?.nextSibling as Node);
        document.getSelection()?.setBaseAndExtent(imageContainer, 0, imageContainer, 0);    
        insertNewImgInp();
        imageContainer.setAttribute('key', `${imageIdx.current-1}`)

    }

    return (
        <aside className={styles['write--optionbar']} id={'aside'}>
            <ButtonComponent className={styles['write--optionbar--button']} children={imageAdd()} event={[['onClick', ()=> {
                try{imageInp.current?.click()} catch(e) {console.log(e)}
            }]]}/>
            <input type='file' accept="image/*" hidden ref={imageInp} onChange={insertImageToContent} key={0} id={'0'} className={'imageInp'}/>
            {inpArray}
        </aside>
    )
}

export default WriteContentAside;