

const FooterItem = ({icon, text}) => { 

    return (
        <div className="FooterItem">
        
        <ion-icon name={icon}></ion-icon>
        <span>{text}</span>

        </div>
    )
 }

 export default FooterItem;