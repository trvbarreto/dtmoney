import logoImg from '../../assets/logo.svg'

export function Header() {
    return (
        <header>
            <img src={logoImg} alt="dt money logo" />
            <button type="button">
                Nova transação
            </button>
        </header>
    )
}