import styles from './icons.module.scss'

const notification = () => {

  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="100%"  viewBox="0 0 16 16" className={styles.notification}>
      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
    </svg>
  )
}

const setting = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" className={styles.setting}>
      <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
      <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
    </svg>
  )
}

const list = () => {
	return (
	<svg xmlns="http://www.w3.org/2000/svg" width="100%" className={styles.list} viewBox="0 0 16 16">
  		<path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
	</svg>)
}

const leftArrow = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" className={styles.arrow}>
      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
    </svg>
  )
}

const rightArrow = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" className={styles.arrow}>
      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
    </svg>
  )
}

const like = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className = {styles.like}>
      <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
    </svg>
  )
}

const likeplus = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox='0 0 48 48'>
      <path d="M22 23.15Zm0 18.8-4.95-4.55q-4.35-4-7.225-6.85Q6.95 27.7 5.2 25.4q-1.75-2.3-2.475-4.325Q2 19.05 2 16.75q0-4.5 3.025-7.625T12.5 6q2.85 0 5.275 1.325Q20.2 8.65 22 11.2q2.1-2.7 4.45-3.95T31.5 6q4.05 0 6.775 2.75Q41 11.5 41.6 15.4h-2.95q-.45-2.75-2.325-4.575Q34.45 9 31.5 9q-2.55 0-4.75 1.55t-3.55 4.4h-2.45q-1.3-2.8-3.5-4.375Q15.05 9 12.5 9q-3.3 0-5.4 2.225Q5 13.45 5 16.75q0 1.95.775 3.8.775 1.85 2.7 4.2 1.925 2.35 5.225 5.5T22 38q1.6-1.45 3.025-2.7 1.425-1.25 2.825-2.45l.325.325q.325.325.725.7.4.375.725.7l.325.325q-1.35 1.2-2.8 2.45-1.45 1.25-3.1 2.75ZM36.5 34v-6.5H30v-3h6.5V18h3v6.5H46v3h-6.5V34Z"/>
    </svg>
  )
  
}
const view = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className = {styles.view}>
      <path d="M4.5 1A1.5 1.5 0 0 0 3 2.5V3h4v-.5A1.5 1.5 0 0 0 5.5 1h-1zM7 4v1h2V4h4v.882a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V13H9v-1.5a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5V13H1V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V4h4zM1 14v.5A1.5 1.5 0 0 0 2.5 16h3A1.5 1.5 0 0 0 7 14.5V14H1zm8 0v.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V14H9zm4-11H9v-.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5V3z"/>
    </svg>
  )
}

const share = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox='0 0 48 48'>
      <path d="M11 46q-1.2 0-2.1-.9Q8 44.2 8 43V17.55q0-1.2.9-2.1.9-.9 2.1-.9h8.45v3H11V43h26V17.55h-8.55v-3H37q1.2 0 2.1.9.9.9.9 2.1V43q0 1.2-.9 2.1-.9.9-2.1.9Zm11.45-15.35V7.8l-4.4 4.4-2.15-2.15L23.95 2 32 10.05l-2.15 2.15-4.4-4.4v22.85Z"/>
    </svg>
  )
}

const exclamation = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox='0 0 48 48'>
      <path d="M24 42q-1.45 0-2.475-1.025Q20.5 39.95 20.5 38.5q0-1.45 1.025-2.475Q22.55 35 24 35q1.45 0 2.475 1.025Q27.5 37.05 27.5 38.5q0 1.45-1.025 2.475Q25.45 42 24 42Zm-3.5-12V6h7v24Z"/>
    </svg>
  )
}

const toggledown = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox='0 0 48 48'>
      <path d="m24 30.45 8.65-8.65-2.15-2.1-6.5 6.5-6.5-6.5-2.15 2.1ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"/>
    </svg>
  )
}

const toggleup = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox='0 0 48 48'>
      <path d="M22.5 31.4h3v-9.1l3.7 3.7 2.1-2.1-7.3-7.3-7.3 7.3 2.1 2.1 3.7-3.7ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"/>
    </svg>
  )
}

const write = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox='0 0 48 48'>
      <path d="M28 42q-.6 0-1.05-.45-.45-.45-.45-1.05 0-.65.45-1.075Q27.4 39 28 39q2.95 0 4.975-1.2Q35 36.6 35 35q0-1.15-1.475-2.25t-3.975-1.7l2.35-2.35q3.15.95 4.625 2.625T38 35q0 3.35-3.05 5.175Q31.9 42 28 42ZM12 27.3q-3.2-.7-4.6-2.2Q6 23.6 6 22q0-1.75 1.3-3.15t6-3.1q3.3-1.2 4.25-1.95.95-.75.95-1.75 0-1.25-1.1-2.15Q16.3 9 14 9q-1.35 0-2.3.35-.95.35-1.7 1.1-.4.4-1.025.475Q8.35 11 7.85 10.6q-.55-.4-.575-1-.025-.6.375-1.05.85-1.1 2.55-1.825Q11.9 6 14 6q3.4 0 5.45 1.625Q21.5 9.25 21.5 12.05q0 2.05-1.425 3.475Q18.65 16.95 14.5 18.5q-3.35 1.25-4.425 1.975Q9 21.2 9 22q0 .8 1.35 1.525 1.35.725 4.05 1.375Zm24.8-7.7-6.4-6.4 2.25-2.25q.9-.9 2-.9t2 .9l2.4 2.4q.9.9.9 2t-.9 2ZM11 39h2.1l17.25-17.25-2.1-2.1L11 36.9Zm-3 3v-6.4l20.25-20.25 6.4 6.4L14.4 42Zm20.25-22.35 2.1 2.1Z"/>
    </svg>
  )
}

const toggleon = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox='0 0 48 48' className={styles.toggleon}>
      <path d="M14 36q-5 0-8.5-3.5T2 24q0-5 3.5-8.5T14 12h20q5 0 8.5 3.5T46 24q0 5-3.5 8.5T34 36Zm0-3h20q3.75 0 6.375-2.625T43 24q0-3.75-2.625-6.375T34 15H14q-3.75 0-6.375 2.625T5 24q0 3.75 2.625 6.375T14 33Zm20.05-3.95q2.1 0 3.575-1.475T39.1 24q0-2.1-1.475-3.575T34.05 18.95q-2.1 0-3.575 1.475T29 24q0 2.1 1.475 3.575t3.575 1.475ZM24 24Z"/>
    </svg>
  )
}

const toggleoff = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox='0 0 48 48'>
      <path d="M14 36q-5 0-8.5-3.5T2 24q0-5 3.5-8.5T14 12h20q5 0 8.5 3.5T46 24q0 5-3.5 8.5T34 36Zm0-3h20q3.75 0 6.375-2.625T43 24q0-3.75-2.625-6.375T34 15H14q-3.75 0-6.375 2.625T5 24q0 3.75 2.625 6.375T14 33Zm-.05-3.95q2.1 0 3.575-1.475T19 24q0-2.1-1.475-3.575T13.95 18.95q-2.1 0-3.575 1.475T8.9 24q0 2.1 1.475 3.575t3.575 1.475ZM24 24Z"/>
    </svg>
  )
}

const moreDot = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 48 48">
      <path d="M10.4 26.4q-1 0-1.7-.7T8 24q0-1 .7-1.7t1.7-.7q1 0 1.7.7t.7 1.7q0 1-.7 1.7t-1.7.7Zm13.6 0q-1 0-1.7-.7t-.7-1.7q0-1 .7-1.7t1.7-.7q1 0 1.7.7t.7 1.7q0 1-.7 1.7t-1.7.7Zm13.6 0q-1 0-1.7-.7t-.7-1.7q0-1 .7-1.7t1.7-.7q1 0 1.7.7T40 24q0 1-.7 1.7t-1.7.7Z"/>
    </svg>
  )
}

const imageAdd = () => {
	return(
	<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 48 48">
		<path d="M9 42q-1.25 0-2.125-.875T6 39V9q0-1.25.875-2.125T9 6h20.45v3H9v30h30V18.6h3V39q0 1.25-.875 2.125T39 42Zm26-24.9v-4.05h-4.05v-3H35V6h3v4.05h4.05v3H38v4.05ZM12 33.9h24l-7.2-9.6-6.35 8.35-4.7-6.2ZM9 9v30V9Z"/>
	</svg>)
}

const trash = () => {
	return(
	<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox= "0 0 48 48">
		<path d="M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z"/>
	</svg>
	)
}

const centeralign = () => {
	return(
	<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox= "0 0 48 48">
		<path d="M6 42v-3h36v3Zm8.2-8.25v-3h19.65v3ZM6 25.5v-3h36v3Zm8.2-8.25v-3h19.65v3ZM6 9V6h36v3Z"/>
	</svg>)
}

const leftalign = () => {
	return (
	<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox= "0 0 48 48">
			<path d="M6 42v-3h36v3Zm0-8.25v-3h23.6v3Zm0-8.25v-3h36v3Zm0-8.25v-3h23.6v3ZM6 9V6h36v3Z"/>
	</svg>
	)
}

const rightalign = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"  width="100%" viewBox = "0 0 48 48">
      <path d="M6 42v-3h36v3Zm12.45-8.25v-3H42v3ZM6 25.5v-3h36v3Zm12.45-8.25v-3H42v3ZM6 9V6h36v3Z"/>
    </svg>
  )
}

const close = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg"  width="100%" viewBox = "0 0 48 48">
      <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"/>
    </svg>
  )
}

const fontColor = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" width="100%">
      <path d="M480 976q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-85 32-158t87.5-127q55.5-54 130-84.5T489 176q79 0 150 26.5T763.5 276q53.5 47 85 111.5T880 529q0 108-63 170.5T650 762h-75q-18 0-31 14t-13 31q0 27 14.5 46t14.5 44q0 38-21 58.5T480 976Zm0-400Zm-233 26q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm126-170q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm214 0q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm131 170q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15ZM480 916q11 0 15.5-4.5T500 897q0-14-14.5-26T471 818q0-46 30-81t76-35h73q76 0 123-44.5T820 529q0-132-100-212.5T489 236q-146 0-247.5 98.5T140 576q0 141 99.5 240.5T480 916Z"/>
    </svg>
  )
}

const search = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" width="100%">
    <path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"/>
  </svg>
  ) 
}

const bold = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" width="100%">
    <path d="M275 856V296h228q66 0 114.5 42T666 444q0 38-21 70t-56 49v6q43 14 69.5 50t26.5 81q0 68-52.5 112T510 856H275Zm86-76h144q38 0 66-25t28-63q0-37-28-62t-66-25H361v175Zm0-247h136q35 0 60.5-23t25.5-58q0-35-25.5-58.5T497 370H361v163Z"/>
    </svg>
  )
  
}

export {
  notification, 
  setting, 
  list, 
  leftArrow, 
  rightArrow, 
  like, 
  likeplus, 
  view, 
  share, 
  exclamation, 
  toggledown, 
  toggleup,
  write,
  toggleon,
  toggleoff,
  moreDot,
  imageAdd,
  trash,
  centeralign,
  leftalign,
  rightalign,
  close,
  fontColor,
  search,
  bold}