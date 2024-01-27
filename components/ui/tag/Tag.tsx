interface tagProps {
    text: string;
}

const Tag = ({ text }: tagProps) => {
    <>
        <span className="uppercase">
            {text}
        </span>
    </>
}