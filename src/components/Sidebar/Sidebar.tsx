import { useContext, useEffect } from 'react';
import styles from './Sidebar.module.scss';
import SidebarProfile from './SidebarProfile';

import { close } from '../../icons/icons';
import AppContext  from '../../AppContext';
import ButtonComponent from '../Global/ButtonComponent';

import {useNavigate} from 'react-router-dom'


function Sidebar() {
    const appContext = useContext(AppContext);
    const navigate = useNavigate();

    let timer: NodeJS.Timeout

    const hidingSidebar = (sidebar: HTMLDivElement) => { 
        const sidebarCssAnimDuration = window.getComputedStyle(sidebar).getPropertyValue('animation-duration') as string;
        const animDurationWithRegExp = sidebarCssAnimDuration.match(/[^s]+/i);
        const animDurationFloat = animDurationWithRegExp ? parseFloat(animDurationWithRegExp[0]) : 0; 
        sidebar.classList.remove(styles['sidebar--appear']);
        sidebar.classList.add(styles['sidebar--disappear']);
        timer = setTimeout(appContext.context_sidebar.hide, animDurationFloat * 1000) //timeout number === animation-duration
    }

    const navigateToCreate = () => {
        navigate('/create')
    }


    useEffect(()=>{
        return(()=>{
            appContext.context_sidebar.hide()
            clearTimeout(timer)})
    },[])


    return(
    appContext.context_sidebar.visibility ? 
    <div className = {styles.disablingBackground}>
        <aside className={`${styles.sidebar} ${styles['sidebar--appear']}`} id={'sidebar'}>
            <ButtonComponent className={styles['sidebar--close']} event={[['onClick', ()=>hidingSidebar(document.getElementById('sidebar') as HTMLDivElement)]]} children={close()}/>
            <SidebarProfile/>
            <ButtonComponent className={styles['sidebar--write']} event={[['onClick', navigateToCreate]]} children={<p className={styles.write}>글쓰기</p>}/>
        </aside>
    </div> : null
    )
}

export default Sidebar