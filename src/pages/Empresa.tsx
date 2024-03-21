import homeImg from '../assets/images/construdaher/home.png';
import './Empresa.css';

export function Empresa() {
    return (
        <main>
            <h1>Empresa</h1>

            <hr/>

            <section className="about">
                <p>
                    O objetivo da Construdaher é atender os mercados públicos e privados.
                    Estamos preparados para fornecer toda a assistência necessária desde a
                    elaboração de projeto a orientação técnica e execução dos serviços e obras.
                    A experiência técnica-profissional acumulada até o presente momento deriva do sucesso
                    de comercialização respaldado pela credibilidade e apoio dos órgãos de administração pública e
                    privado.
                    Esta credibilidade é o resultado da qualidade dos serviços já prestados no ramo da construção
                    civil.
                </p>
            </section>

            <section className="lema">
                {/* <h3>Nosso lema:</h3> */}
                <b>
                    "A EXCELÊNCIA DA QUALIDADE NA EXECUÇÃO DOS SERVIÇOS É A NOSSA GARANTIA"
                </b>
                <p>
                    Com esta filosofia de trabalho, voltada aos interesses de nossos clientes, é que esperamos
                    conquistar também a sua preferência.
                </p>

                <figure><img src={homeImg} id="homeImage"/></figure>
            </section>
        </main>
    )
}