import './Footer.css';
import { Separator } from './Separator';
import { FacebookLogo } from '@phosphor-icons/react';

export function Footer() {
    return(
        <footer className="dados-empresa">
            <div className="endereco">
                {/* <b>Nosso endereço</b> */}
                <span>R. Clarence, 335 | Vila Cruzeiro | São Paulo - SP | Tel. 11 5642-3390 | construdahersp@construdaher.com.br</span>
            </div>

            <Separator color='separator-v-white'/>

            <div className="midias">
                <b><i>Acesse nosso Facebook:</i></b>
                <a 
                    href="https://www.facebook.com/construdaher/" 
                    target="_blank"
                    rel="noopener noreferrer">
                        <FacebookLogo />
                </a>
                
            </div>
        </footer>
    )
}