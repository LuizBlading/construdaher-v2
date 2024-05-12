interface ImageProps {
    url: string,
    alt: string,
    description: string
}

export function Image(props: ImageProps) {
    return (
        <div
            style={{ paddingBottom: "1rem", textAlign: "center" }}
        >
            <img
                draggable={false}
                style={{ width: "100%", height: "100%", position: "relative" }}
                src={props.url}
                alt={props.alt}
            />
            <b
                style={{ margin: "15px 0", fontWeight: "normal" }}
            >
                {props.description}
            </b>
        </div>
    )
}