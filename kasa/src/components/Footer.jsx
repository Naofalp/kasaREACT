import logoKasaBlanc from "../assets/logoKasaBlanc.svg";

export default function Footer() {
    return <>
        <footer className="footerBand">
            <img src={logoKasaBlanc} className="footerBand_img"/>
            <p className="footerBand_text">© 2020 Kasa. All <br className="mobile-break"/> rights reserved</p>
        </footer>
    </>
}