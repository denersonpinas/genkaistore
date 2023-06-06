interface IButton {
    label: String
    classname: string
    onClick?: () => void
    icon?: JSX.Element
}

export function Button({ label, onClick, classname, icon} : IButton) {
    return(
        <button onClick={onClick} className={classname + ' w-full'}>
            {icon ? icon : ''}
            {label}
        </button>
    )
}