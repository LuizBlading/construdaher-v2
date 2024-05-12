import './Separator.css'

interface SeparatorProps {
    color: string
}

export function SeparatorHorizontal(props: SeparatorProps) {
    return(
        <hr className={props.color}/>
    )
}