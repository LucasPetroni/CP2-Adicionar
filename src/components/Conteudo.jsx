import logoReact from "../assets/react.svg";

export default function Conteudo(props) {
    
    let altLogoReact = "Logo React";
    
    return (
        <>
            <section>
                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum quos magni aperiam ab dignissimos expedita quasi a. Eveniet necessitatibus optio corporis nam cum, illo dicta unde voluptatem accusantium natus harum!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo natus? Dignissimos ratione atque praesentium placeat accusantium eius modi illo maiores explicabo deleniti, nam asperiores assumenda inventore maxime cum iusto!</p>
                    <img src={logoReact} alt={altLogoReact} />
                    <img src={props.imagemLogoProps} alt={props.imagemAltProps} />
                </div>
            </section>
        </>
    )
}