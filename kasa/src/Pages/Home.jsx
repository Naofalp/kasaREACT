import BannerHome from "../components/BannerHome";
import CardLogements from "../components/CardLogements";

export default function Home() {
    return <>
        <BannerHome />
        <section className="card_container">
            <CardLogements/>
        </section>
    </>
}