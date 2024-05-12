import './Separator.css'

interface SeparatorProps {
    color: string
}

export function Separator(props: SeparatorProps) {
    return(
        <div className={props.color}></div>
    )
}