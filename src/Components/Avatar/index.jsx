import style from './style.module.css'

export function Avatar ({
    src,
    hasBorder=true
}) {
    return (

        <img 
            src={src}
            className={hasBorder ? style.profileImgWithBorder : style.profileImg} 
        />
    )
}