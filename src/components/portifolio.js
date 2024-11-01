import './estilo.css';
import React, {useState, useEffect, useRef} from 'react'
import Foto from './img/profile-pic.png'
import Fundo from './img/code.jpg'
import Loja from './img/Loja.PNG'
import Lojapag from './img/Loja2.PNG'
import Cidade from './img/Cidade.PNG'
import Noticias from './img/Noticias.PNG'
import Site from './img/Site.PNG'
import Basico from './img/Basico.PNG'
import { ReactComponent as Linkedin } from './img/li-logo.svg'
import { ReactComponent as Mail } from './img/mail.svg'
import { ReactComponent as Call } from './img/call.svg'
import { ReactComponent as Grad } from './img/gradu.svg'
import { ReactComponent as Per } from './img/job.svg'
import { ReactComponent as Arr } from './img/arrow.svg'
import { ReactComponent as Cell} from './img/cellphone2.svg'
import { ReactComponent as Git} from './img/github.svg'
import { ReactComponent as Up } from './img/arrow-up.svg'
import { ReactComponent as Dow } from './img/download.svg'



export default function Portifolio() {
    const email = "eduhenmachado@gmail.com";
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const portiRef = useRef(null);

    const [showPhone, setShowPhone] = useState(false);
    const [selectedOption, setSelectedOption] = React.useState('opcao1');
    const [vis, setVis] = React.useState('visible');
    const [vis2, setVis2] = React.useState('none');
    const [vis3, setVis3] = React.useState('none');
    const [vis4, setVis4] = React.useState('none');

    const handleClick = () => {
        window.location.href='https://www.linkedin.com/in/eduardo-machado-a3622415a/';
      };

    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`;
    };

    const scrollToHome = () => {
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
      }

      const scrollToAbout = () => {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      }

      const scrollToPorti = () => {
        portiRef.current.scrollIntoView({ behavior: 'smooth' });
      }

  React.useEffect(() => {
    switch (selectedOption) {
        case 'opcao1':
            setVis2('none');
            setVis3('none');
            setVis4('none');
            setVis('');
            break
        case 'opcao2':
            setVis('none');
            setVis3('none');
            setVis4('none');
            setVis2('');
            break
        case 'opcao3':
            setVis('none');
            setVis2('none');
            setVis4('none');
            setVis3('')
            break
        case 'opcao4':
            setVis('none');
            setVis2('none');
            setVis3('none');
            setVis4('')
            break
        default:
            setVis('')
            break
    }
  }, [selectedOption]);

    return(
        <div className="pagina">
            <header className="cabecalho">
                <div className='head'>
                    <h2 className="inter-body">Portifolio</h2>
                    <div className="menu">
                        <button className="btn inter-btn" onClick={scrollToHome}>Home</button>
                        <button className="btn inter-btn" onClick={scrollToAbout}>About</button>
                        <button className="btn inter-btn" onClick={scrollToPorti}>Portifolio</button>
                    </div>
                </div>
            </header>
            <div id='home' ref={homeRef} className="into">
                <div className="dentro">
                    <img src={Fundo} alt="Fundo" className="fundo"/>
                    <div className="info">
                        <div className="foto">
                            <img src={Foto} alt="Foto" className="imagem"></img>
                        </div>
                        <h1 className="inter-h1 mtop">Eduardo Henrique Machado</h1>
                        <h2 className="inter-h2 mbottom">Programador</h2>
                        <div className="contact">
                            <button onClick={handleClick} className="btnicon">
                                <Linkedin style={{ width: '15px', height: '15px', fill: '#000'}}/>
                            </button>
                            <button onClick={handleEmailClick} className="btnicon">
                                <Mail style={{ width: '20px', height: '20px', fill: '#000'}}/>
                            </button>
                            <button 
                            onMouseEnter={() => setShowPhone(true)} 
                            onMouseLeave={() => setShowPhone(false)}
                            className="btnicon">
                                <Call style={{ width: '20px', height: '20px', fill: '#000'}}/>
                            </button>
                            {showPhone && (
                                    <div className='msm' >
                                        <p className='cortel'>(51) 99709-4347</p>
                                    </div>  
                                 )}
                        </div>
                    </div>
                    <div className="texto">
                        <h2 className="inter-h1">Seja bem vindo!</h2>
                        <br/>
                        <p className="inter-p">Olá a todos, meu nome é Eduardo Henrique Machado, sou um desenvolvedor de software.Estou a recém começãndo na área de front-end, back-end e mobile, tenho 2 anos de experiencia construindo projetos. Me considero um profissional dedicado e apaixonado pelo que faço.</p>
                        <br/>
                        <p className="inter-p">Estou sempre em busca de novos desafios e oportunidades. Se você está procurando alguém comprometido, criativo e com exelentes habilidades técnicas, eu seria um exelente candidato para sua equipe</p> 
                    </div>
                </div>
            </div>
            <section id='about' ref={aboutRef}>
                <hr/>
                <div>
                    <div className="titulo1">
                        <h1 className="about">ABOUT ME</h1>
                    </div>
                    <div className="pessoais">
                        <div className="colunas">
                            <h2 className="titulo3">Informações Pessoais</h2>
                            <div className="colunas2">
                                <div>
                                    <p className="inter-info">Nome: Eduardo Henrique Machado</p>
                                    <p className="inter-info">Idade: 38 anos</p>
                                    <p className="inter-info">Local: Santa Cruz do Sul, Brasil</p>
                                    <p className="inter-info">GitHub: Eduhenmac</p>
                                </div>
                            
                                <div className='infospace'>
                                    <p className="inter-info">Telefone: 55 (51) 99709-4347</p>
                                    <p className="inter-info">E-mail: eduhenmachado@gmail.com</p>
                                    <p className="inter-info">Graduação: Engenharia de Computação</p>
                                    <p className="inter-info">Linguas: Português e Inglês</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="hall">
                            <div>
                                <div>
                                    <p className="inter-grande">14<sup>+</sup> </p>
                                    <p className="inter-hall">Anos de estudo</p>
                                </div>
                                <div>
                                    <p className="inter-grande">10<sup>+</sup> </p>
                                    <p className="inter-hall">Projetos concluidos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='btn-dow'>
                        <a className='alinhar' href="/curriculoProgramador.pdf" download="curriculoProgramador.pdf">
                            <button className='inter-btndown'>DOWLOAD CV</button>
                            <button className='down'>
                                    <Dow style={{ width: '35px', height: '35px', fill: '#000', margin: '0 auto'}}/>
                            </button>
                        </a>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </section>

            <section>
                <div className="alin">
                    <div className="divisor"/>
                </div>
                <div>
                    <div className="titulo2">
                        <h1 className="about2">SKILLS</h1>
                    </div>
                    <br/>
                    <br/>

                    <div className="central">
                        <div className="divskill">
                            <div className="conjunto">
                                <p className="inter-skill">
                                    Javascript
                                </p>
                                <div className="junto">
                                    <div className="bar">
                                        <div className="inside"/>
                                    </div>
                                    <p className="inter-percent">70%</p>
                                </div>
                            </div>
                            <br/>

                            <div className="conjunto">
                                <p className="inter-skill">
                                    HTML 5
                                </p>
                                <div className="junto">
                                    <div className="bar">
                                        <div className="inside9"/>
                                    </div>
                                    <p className="inter-percent">90%</p>
                                </div>
                            </div>

                            <br/>

                            <div className="conjunto">
                                <p className="inter-skill">
                                    PHP
                                </p>
                                <div className="junto">
                                    <div className="bar">
                                        <div className="inside"/>
                                    </div>
                                    <p className="inter-percent">70%</p>
                                </div>
                            </div>
                            <br/>

                            <div className="conjunto">
                                <p className="inter-skill">
                                    React Native
                                </p>
                                <div className="junto">
                                    <div className="bar">
                                        <div className="inside8"/>
                                    </div>
                                    <p className="inter-percent">80%</p>
                                </div>
                            </div>

                            <br/>
                            <div className="conjunto">
                                <p className="inter-skill">
                                    SQL (MySQL, Postgres)
                                </p>
                                <div className="junto">
                                    <div className="bar">
                                        <div className="inside8"/>
                                    </div>
                                    <p className="inter-percent">80%</p>
                                </div>
                            </div>
                            <br/>
                            <div className="conjunto">
                                <p className="inter-skill">
                                    Git/GitHub
                                </p>
                                <div className="junto">
                                    <div className="bar">
                                        <div className="inside1"/>
                                    </div>
                                    <p className="inter-percent">100%</p>
                                </div>
                            </div>


                        </div>
                        <div className="divskill">
                            <div className="conjunto">
                                <p className="inter-skill">
                                    Comunicação
                                </p>
                                <div className="junto">
                                    <div className="bar">
                                        <div className="inside"/>
                                    </div>
                                    <p className="inter-percent">70%</p>
                                </div>
                            </div>
                            <br/>

                            <div className="conjunto">
                                <p className="inter-skill">
                                    Trabalho em equipe
                                </p>
                                <div className="junto">
                                    <div className="bar">
                                        <div className="inside8"/>
                                    </div>
                                    <p className="inter-percent">80%</p>
                                </div>
                            </div>

                            <br/>

                            <div className="conjunto">
                                <p className="inter-skill">
                                    Pesquisa
                                </p>
                                <div className="junto">
                                    <div className="bar">
                                        <div className="inside9"/>
                                    </div>
                                    <p className="inter-percent">90%</p>
                                </div>
                            </div>
                            <br/>

                            <div className="conjunto">
                                <p className="inter-skill">
                                    Criatividade
                                </p>
                                <div className="junto">
                                    <div className="bar">
                                        <div className="inside9"/>
                                    </div>
                                    <p className="inter-percent">90%</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>    
                <br/>
                <br/>
                <br/>
                <br/>
            </section>

            <section>
                <div className="alin">
                    <div className="divisor"/>
                </div>
                <div>
                    <div className="titulo2">
                        <h1 className="about2">EXPERIENCIA E EDUCAÇÂO</h1>
                    </div>
                    <br/>
                    <br/>
                    <div className="exp">
                        <div className="exp2">
                            <div>
                                <button style={{ background: '#111', border: 'none'}}>
                                    <Grad style={{ width: '30px', height: '30px', fill: '#01AFDA'}}/>
                                </button>
                            </div>
                            <div>
                                <p className="inter-edu">Graduação: Engenharia de Computação</p>
                                <p className="inter-edu">Universdade: UNISC 2010 - 2024</p>
                            </div>

                        </div>

                        <div className="exp21">
                            <div>
                                <button style={{ background: '#111', border: 'none'}}>
                                    <Per style={{ width: '30px', height: '30px', fill: '#01AFDA'}}/>
                                </button>
                            </div>
                            <div>
                                <p className="inter-edu">Empresa: G&P</p>
                                <p className="inter-edu">Cargo atual: Auxiliar de Tecnologia da Informação</p>
                            </div>

                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>

                </div>
            </section>
            <section id='porti' className="porti" ref={portiRef} style={{display: vis}}>
                <div className="titulo2">
                    <h1 className="about">Portifolio</h1>
                </div>
                <br/>
                <br/>
                <div className="opcoens">
                    <p id='btn1' className="inter-ex2" onClick={()=> setSelectedOption('opcao1')}>Todos</p>
                    <p id='btn2' className="inter-p" onClick={()=> setSelectedOption('opcao2')}>Loja</p>
                    <p id='btn3' className="inter-p" onClick={()=>setSelectedOption('opcao3')}>Noticia</p>
                    <p id='btn4' className="inter-p" onClick={()=> setSelectedOption('opcao4')}>Site</p>
                </div>
                <div className="tres">
                    <div className="caixa">
                        <div >
                            <img src={Loja} className="lojaimg" alt="Loja"/>
                        </div>
                        <div className="dividir">
                            <div>
                                <p className="inter-opc">Loja</p>
                                <p className="inter-date">03/07</p>
                            </div>
                            <div className=""> 
                                <button className="btn-arrow" onClick={()=> setSelectedOption('opcao2')}>
                                    <Arr style={{ width: '25px', height: '25px', fill: '#000'}}/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="caixa">
                        <div >
                            <img src={Cidade} className="lojaimg" alt="Loja"/>
                        </div>
                        <div className="dividir">
                            <div>
                                <p className="inter-opc">Noticia</p>
                                <p className="inter-date">10/05</p>
                            </div>
                            <div className=""> 
                                <button className="btn-arrow" onClick={()=>setSelectedOption('opcao3')}>
                                    <Arr style={{ width: '25px', height: '25px', fill: '#000'}}/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="caixa">
                        <div >
                            <img src={Site} className="lojaimg" alt="Loja"/>
                        </div>
                        <div className="dividir">
                            <div>
                                <p className="inter-opc">Site</p>
                                <p className="inter-date">06/04</p>
                            </div>
                            <div className=""> 
                                <button className="btn-arrow" onClick={()=> setSelectedOption('opcao4')}>
                                    <Arr style={{ width: '25px', height: '25px', fill: '#000'}}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="porti" style={{display: vis2}}>
                <div className="titulo2">
                    <h1 className="about">Portifolio</h1>
                </div>
                <br/>
                <br/>
                <div className="opcoens">
                    <p id='btn1'  className="inter-p" onClick={()=> setSelectedOption('opcao1')} >Todos</p>
                    <p id='btn2' className="inter-ex2" onClick={()=> setSelectedOption('opcao2')}>Loja</p>
                    <p id='btn3' className="inter-p" onClick={()=> setSelectedOption('opcao3')}>Noticia</p>
                    <p id='btn4' className="inter-p" onClick={()=> setSelectedOption('opcao4')}>Site</p>
                </div>
                <div className='explica'>
                    <div>
                        <img className='portimg' src={Lojapag} alt='Pagina da loja'/>
                    </div>
                    <div className='explicacao'>
                        <h3 className='tit'>Este código cria uma pagina web de uma loja com as seguintes opções:</h3>
                        <ol style={{listStylePosition: 'outside'}}>
                            <li className='inter-ex' >
                                A pagina inclui um cabeçalho com opções de navegação.
                            </li>
                            <li className='inter-ex' >
                                Foi inserido um carrocel de imagens com os banners da marca.
                            </li>
                            <li className='inter-ex' >
                                Abaixo do carrocel foi adicionado uma loja com alguns produtos. Ao clicar no produto ele é inserido no carrinho.
                            </li>
                            <li className='inter-ex' >
                                Contem um carrinho de compras com os itens selecionados.
                            </li>
                            <li className='inter-ex' >
                                Por ultimo é incluido um formulario para o cadastro do cliente.
                            </li>
                        </ol>

                    </div>
                </div>
            </section>
            <section className="porti" style={{display: vis3}}>
                <div className="titulo2">
                    <h1 className="about">Portifolio</h1>
                </div>
                <br/>
                <br/>
                <div className="opcoens">
                    <p id='btn1'  className="inter-p" onClick={()=> setSelectedOption('opcao1')}>Todos</p>
                    <p id='btn2' className="inter-p" onClick={()=> setSelectedOption('opcao2')}>Loja</p>
                    <p id='btn3' className="inter-ex2" onClick={()=> setSelectedOption('opcao3')}>Noticia</p>
                    <p id='btn4' className="inter-p" onClick={()=> setSelectedOption('opcao4')}>Site</p>
                </div>
                <div className='explica'>
                    <div>
                        <img className='portimg' src={Noticias} alt='Pagina da loja'/>
                    </div>
                    <div className='explicacao'>
                        <h3 className='tit'>Este código cria uma pagina web de noticias com as seguintes opções:</h3>
                        <ol style={{listStylePosition: 'outside'}}>
                            <li className='inter-ex' >
                                A pagina inclui um menu no cabeçalho feito com links e uma imagem de fundo.
                            </li>
                            <li className='inter-ex' >
                               Na parte lateral esquerda existe um menu para navegação com a opção de cadastrar o email.
                            </li>
                            <li className='inter-ex' >
                                Foi adicionado na parte central duas imagens com texto e respectivos links que levam o usuario a página de notícias.
                            </li>
                            <li className='inter-ex' >
                                Abaixo com destaque menor que a cessão anterior são colocadas novas imagens com links.
                            </li>
                            <li className='inter-ex' >
                                Por ultimo é incluido um rodapé com informações adicionais.
                            </li>
                        </ol>

                    </div>
                </div>
            </section>
            <section className="porti" style={{display: vis4}}>
                <div className="titulo2">
                    <h1 className="about">Portifolio</h1>
                </div>
                <br/>
                <br/>
                <div className="opcoens">
                    <p id='btn1' className="inter-p" onClick={()=> setSelectedOption('opcao1')}>Todos</p>
                    <p id='btn2' className="inter-p" onClick={()=> setSelectedOption('opcao2')}>Loja</p>
                    <p id='btn3' className="inter-p" onClick={()=> setSelectedOption('opcao3')}>Notícia</p>
                    <p id='btn4' className="inter-ex2" onClick={()=> setSelectedOption('opcao4')}>Site</p>
                </div>
                <div className='explica'>
                    <div>
                        <img className='portimg' src={Basico} alt='Pagina da loja'/>
                    </div>
                    <div className='explicacao'>
                        <h3 className='tit'>Este código cria uma três paginas web com links e com seguintes conteudos:</h3>
                        <ol style={{listStylePosition: 'outside'}}>
                            <li className='inter-ex' >
                               Na primeira página está incluido o logo, uma imagem e a apresentação.
                            </li>
                            <li className='inter-ex' >
                                Na segunda página está escrita as informações do site e objetivos.
                            </li>
                            <li className='inter-ex' >
                                Na terceira página está incluido um formulário para enviar o contato do usuario.
                            </li>
                            <li className='inter-ex' >
                                Todo conteudo foi extilizado com CSS.
                            </li>
                        </ol>

                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div className="titulo1">
                        <h1 className="about">CONTACT ME</h1>
                    </div>

                    <div className='centralizar'>
                        <div className='linha'>
                            <Cell style={{ width: '50px', height: '50px', fill: '#FFF'}}/>
                            <div>
                                <p className='inter-con'>Telefone:</p>
                                <p className='inter-info2'>(51)99709-4347</p>
                            </div>
                        </div>
                        <div className='linha'>
                            <Mail style={{ width: '40px', height: '40px', fill: '#FFF', marginRight: '10px'}}/>
                            <div>
                                <p className='inter-con'>E-mail:</p>
                                <p className='inter-info2'>eduhenmachado@gmail.com</p>
                            </div>
                        </div>
                        <div className='linha'>
                            <Git style={{ width: '60px', height: '60px', fill: '#FFF'}}/>
                            <div>
                                <p className='inter-con'>GitHub:</p>
                                <p className='inter-info2'>Eduhenmac</p>
                            </div>
                        </div>
                    </div>
                    <div className='btnfinal'>
                        <button className='btnhome' onClick={scrollToHome}>
                            <p className='inter-home'>HOME</p>
                            <div className='arrow-up'>
                                <Up style={{ width: '35px', height: '35px', fill: '#B9B6AC'}}/>
                            </div>
                        </button>
                    </div>


                </div>
            </section>
        </div>
    )
    
}

