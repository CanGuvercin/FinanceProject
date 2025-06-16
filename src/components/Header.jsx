import logo from "../assets/investment-calculator-logo.png";


export default function Header() {
    return <header id="header">
        <img src={logo} alt="logo shows a money bag"/>
        <h1>Invest money now!</h1>
    </header>
}