import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Paginacao from "../../../components/Paginacao";
import Sticker from "../../../components/Sticker";
import MiniSticker from "../../../components/MiniSticker";
import { TimelineCard } from "../../../components/TimelineCard";
import imagemArvores from "../../../assets/arvores.jpg"
import imagemVideo from "../../../assets/video.jpg"
import imagemBazar from "../../../assets/bazar.jpg"
import imagemHorta from "../../../assets/horta.jpg"
import imagemGrafico from "../../../assets/grafico.png"
import imagemCampo from "../../../assets/campo.jpg"

import {
    Text,
    Title,
    Space,
    ImageWrapper,
    DivStyled,
    DivStyled2,
    DivImagem,
    DivTexto,
    DivOverlay,
    ImgStyled,
    SitioSemLixo,
    SitioSemLixoTitle,
    Container,
    MiniSpace,
    IconWrapper,
    SitioVerdeTitle
} from "./styeld"


export default function SocialActionsPage() {

    return(
        <>
            <Paginacao text={"FAMÍLIA DO SÍTIO > SITIO VERDE"} />
            <Space/>

            <Title>Nossas iniciativas</Title>
            <Text>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam. Ut wisi enim ad minim veniam. Ut wisi enim
                ad minim veniam. 
            </Text>
            <Space/>

            <DivImagem>
                <img src={imagemArvores} alt="video falso" style={{ width: "100%", height: "auto", objectFit: "contain",  display: "block", filter: "brightness(20%) "}} />

                <DivTexto>            
                    <SitioVerdeTitle>
                        <IconWrapper>
                            <svg width="800px" height="800px" viewBox="0 -22.24 248.376 248.376" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    <path class="a" fill="#FFF" d="M7.058,180.612c13.245-1.445,30.587.662,43.58,4.029,17.323,4.489,33.276,10.647,50.609,15.1,6.466,1.66,13.884,2.761,20.145.447,5.431-2.006,9.769-5.537,14.061-9.423,6.758-6.118,28.969-21.485,36.32-26.876l.351-.257c1.04-.061,1.935-.128,2.658-.2,3.409-.347,14.585-2.646,14.894-13.153a.325.325,0,0,0,0-.076c8.545-6.374,18.927-14.6,26.366-22.138q7.947-8.937,15.685-18.059c4.773-5.626,10.45-12.088,10.082-17.246a3.271,3.271,0,0,0-.48-1.369c2.706-2.316,5.007-5.247,4.62-8.573a6.417,6.417,0,0,0-4.218-5.155c-11.659-4.3-21.653,1.133-30.8,7.8-5.456-6.057-16.437-1.354-22.383,1.318-13.672,6.143-23.835,14.449-35.638,23.141a2.789,2.789,0,0,1-.585.331c-13.069,5.384-31.688,8.346-47.557,9.994l-.3.039c-3.235-2.255-6.428-4.6-8.325-5.958-12.923-9.274-21.666-12.281-27.627-13.519-7.789-1.618-24.788-.305-37.443,2.331-8.236,1.716-16.432,7.053-28.711,9.881Z" />
                                    <path class="b" fill="#FFF" d="M7.058,183.012c12.61-1.34,25.634.086,37.981,2.765,13.878,3.012,27.3,7.916,40.858,12.082,6.706,2.062,13.529,4.3,20.47,5.419a37.334,37.334,0,0,0,10.038.461,26.885,26.885,0,0,0,9.628-3.009c4.9-2.566,8.8-6.407,13.014-9.9,3.23-2.674,6.4-5.01,9.85-7.552,7.965-5.862,16.11-11.475,24.088-17.319a2.471,2.471,0,0,0,.861-3.283,2.417,2.417,0,0,0-3.284-.861c-6.926,5.073-13.987,9.962-20.932,15.011-3.834,2.787-7.65,5.6-11.381,8.526-3.447,2.7-6.563,5.827-10.108,8.4a29.532,29.532,0,0,1-8.192,4.4,24.44,24.44,0,0,1-9.433.843c-6.847-.546-13.618-2.835-20.164-4.8-13.646-4.088-27.086-8.979-40.943-12.337a151,151,0,0,0-21.329-3.521,105.262,105.262,0,0,0-21.022-.126,2.47,2.47,0,0,0-2.4,2.4,2.416,2.416,0,0,0,2.4,2.4Z" />
                                    <path class="b" fill="#FFF" d="M191.8,151.588c4.927-3.7,9.792-7.486,14.515-11.443a121.5,121.5,0,0,0,13.2-12.4q6.711-7.587,13.272-15.305c3.838-4.515,8.184-9.081,10.449-14.642.919-2.254,1.468-4.937.372-7.221a7.941,7.941,0,0,0-6.222-4.356c-5.707-.512-10.942,2-15.772,4.733-8.735,4.938-15.369,12.363-22.508,19.251a118.074,118.074,0,0,1-13.578,11.1,121.336,121.336,0,0,1-17,10.283,2.423,2.423,0,0,0-.861,3.283,2.45,2.45,0,0,0,3.284.861,131.036,131.036,0,0,0,27.268-18.263c6.994-5.975,12.828-13.283,20.252-18.761a54.426,54.426,0,0,1,12.295-6.891,11.042,11.042,0,0,1,2.968-.678,9.711,9.711,0,0,1,3.846-.017,3.476,3.476,0,0,1,1.76,1.623c-.021-.039-.151-.5.067.178-.13-.407.016.126.014.279a5.6,5.6,0,0,1-.164,1.377,18.989,18.989,0,0,1-3.222,6.266c-1.588,2.263-3.386,4.369-5.174,6.475q-6.183,7.283-12.478,14.468c-2.2,2.508-4.393,4.988-6.815,7.289-2.308,2.193-4.691,4.307-7.114,6.372-4.888,4.167-9.942,8.134-15.077,11.989a2.476,2.476,0,0,0-.861,3.284,2.416,2.416,0,0,0,3.283.861Z" />
                                    <path class="b" fill="#FFF" d="M243.52,92.649c3.651-3.359,6.542-8.526,3.721-13.347-2.576-4.4-8.7-5.468-13.387-5.568-10.138-.215-18.992,5.713-26.738,11.591q-14.251,10.814-28.448,21.695c-3.645,2.781-7.285,5.573-11.007,8.25-1.348.969-2.7,1.949-4.125,2.805-.323.194-.65.374-.989.539-.232.114-.469.221-.706.326l-.332.146c-.466.2.384-.155-.173.074a158.365,158.365,0,0,1-29.748,8.822,2.423,2.423,0,0,0-1.676,2.952,2.449,2.449,0,0,0,2.952,1.676,168.928,168.928,0,0,0,26.771-7.654,36.946,36.946,0,0,0,6.587-2.9c3.171-1.968,6.143-4.289,9.122-6.531,8.5-6.391,16.919-12.883,25.373-19.33,4.2-3.206,8.353-6.5,12.668-9.561a49.412,49.412,0,0,1,11.836-6.6,22.79,22.79,0,0,1,14.592-.5c1.9.592,3.669,1.657,3.771,3.856.111,2.382-1.841,4.37-3.458,5.858-2.279,2.1,1.122,5.484,3.394,3.395Z" />
                                    <path class="b" fill="#FFF" d="M212.625,83.763c-4.83-5.167-12.562-3.9-18.547-1.819a99.742,99.742,0,0,0-20.107,9.977c-6.978,4.389-13.517,9.421-20.127,14.335a23.672,23.672,0,0,1-2.434,1.775,16.515,16.515,0,0,1-2.309.912c-1.756.648-3.534,1.237-5.326,1.781-3.838,1.167-7.738,2.128-11.66,2.965a261.27,261.27,0,0,1-27.353,4.156,2.47,2.47,0,0,0-2.4,2.4,2.416,2.416,0,0,0,2.4,2.4c8.1-.846,16.187-1.921,24.191-3.436a129.752,129.752,0,0,0,22.3-5.967,17.778,17.778,0,0,0,2.581-1.066,27.448,27.448,0,0,0,2.433-1.776q2.549-1.893,5.088-3.8c3.2-2.385,6.416-4.754,9.7-7.018a120.941,120.941,0,0,1,20.458-11.515c4.953-2.143,13.323-5.612,17.715-.914,2.114,2.261,5.5-1.138,3.394-3.394Z" />
                                    <path class="b" fill="#FFF" d="M122.693,26.229q-.318,22.277-.733,44.551-.117,6.906-.225,13.813c-.049,3.09,4.751,3.09,4.8,0,.233-14.848.511-29.695.749-44.543q.109-6.91.209-13.821c.044-3.089-4.756-3.091-4.8,0Z" />
                                    <path class="c" fill="#FFF" d="M178.957,10.784A4,4,0,0,0,176.8,7.148,31.372,31.372,0,0,0,161.044,2.44a36.83,36.83,0,0,0-20.591,5.111C130.279,13.7,127.5,24.738,126.906,27.806a1.2,1.2,0,0,0,.6,1.258c3.31,2.034,17.175,9.547,31.321,5.075,2.481-.785,10.979-3.593,16.312-11.244C177.868,18.985,178.661,13.887,178.957,10.784Z" />
                                    <path class="c" fill="#FFF" d="M71.451,10.784a4,4,0,0,1,2.156-3.636A31.369,31.369,0,0,1,89.365,2.44a36.828,36.828,0,0,1,20.59,5.111C120.13,13.7,122.913,24.738,123.5,27.806a1.2,1.2,0,0,1-.6,1.258c-3.31,2.034-17.175,9.547-31.322,5.075C89.1,33.354,80.6,30.546,75.266,22.9,72.54,18.985,71.748,13.887,71.451,10.784Z" />
                                    <path class="b" fill="#FFF" d="M181.357,10.784c.134-3.182-2.268-5.17-4.8-6.587A31.616,31.616,0,0,0,168.8,1.15,39.8,39.8,0,0,0,150.5.985c-8.894,2.01-16.791,7.041-21.54,14.942a35.883,35.883,0,0,0-4.127,10.109,10.217,10.217,0,0,0-.33,1.77,3.818,3.818,0,0,0,2.07,3.5,35.583,35.583,0,0,0,3.962,2.083c9.537,4.435,20.45,6.161,30.539,2.524a34.658,34.658,0,0,0,13.008-8.019,23.807,23.807,0,0,0,5.414-8.3,33.984,33.984,0,0,0,1.858-8.809,2.417,2.417,0,0,0-2.4-2.4,2.453,2.453,0,0,0-2.4,2.4c-.451,4.58-1.727,9.064-4.822,12.6a28.811,28.811,0,0,1-10.205,7.227c-.457.2-.212.093-.11.05-.179.075-.359.147-.54.218q-.445.177-.895.342-.774.284-1.561.534a28.522,28.522,0,0,1-7.8,1.367,38.186,38.186,0,0,1-14.192-2.449,42.3,42.3,0,0,1-4.847-2.091q-.851-.427-1.682-.893c-.243-.135-.484-.274-.723-.415a1.308,1.308,0,0,0-.245-.146c-.959-.21.759,1.1.3,1.216a23.762,23.762,0,0,0,.8-3.135,30.335,30.335,0,0,1,1.544-4.012,27.751,27.751,0,0,1,7.47-9.758A29.034,29.034,0,0,1,147.088,7,35.67,35.67,0,0,1,163.7,5.058,30.048,30.048,0,0,1,171.6,7.1a24.9,24.9,0,0,1,3.415,1.765c.774.473,1.58.939,1.538,1.924C176.427,13.872,181.227,13.866,181.357,10.784Z" />
                                    <path class="b" fill="#FFF" d="M73.851,10.784c-.072-1.728,3.006-2.8,4.3-3.4a28.482,28.482,0,0,1,6.7-2.038,34.581,34.581,0,0,1,15.516.7c7.04,1.95,13.358,6.086,17.214,12.639a28.581,28.581,0,0,1,3.327,8.229c.05.209.095.419.144.628.131.558-.039.218.044.156a7.67,7.67,0,0,1,.485-.647c-.047-.016-.309.192-.357.214-.249.113-.484.281-.723.415a44.833,44.833,0,0,1-4.206,2.076c-8.142,3.5-17.351,4.577-25.873,1.456a30.313,30.313,0,0,1-10.439-6.452c-3.894-3.829-5.607-8.639-6.133-13.981a2.467,2.467,0,0,0-2.4-2.4,2.417,2.417,0,0,0-2.4,2.4c.571,5.8,2.136,11.193,5.975,15.7a31.987,31.987,0,0,0,11.662,8.373,35.657,35.657,0,0,0,13.723,3.079,42.871,42.871,0,0,0,16.2-3.147,53.691,53.691,0,0,0,5.534-2.528c1.8-.956,3.581-1.95,3.729-4.249a12.267,12.267,0,0,0-.808-4.1,37.344,37.344,0,0,0-2.1-5.328,32.538,32.538,0,0,0-19.4-16.57A39.919,39.919,0,0,0,83.576.721a32.676,32.676,0,0,0-8.8,2.985C71.93,5.151,68.9,7.2,69.051,10.784,69.181,13.861,73.982,13.877,73.851,10.784Z" />
                                    <path class="b" fill="#FFF" d="M2.993,115.333a121.5,121.5,0,0,0,18.386-6.395,78.874,78.874,0,0,1,7.575-2.788A69.283,69.283,0,0,1,37.41,104.4a144.647,144.647,0,0,1,18.8-1.849c2.6-.081,5.208-.084,7.8.092a28.434,28.434,0,0,1,5.409.828c10.058,2.445,18.924,8.164,27.273,14.2,4.137,2.993,8.264,6.043,12.617,8.718a63.7,63.7,0,0,0,17.069,6.875,94.863,94.863,0,0,0,16.955,2.46c4.765.373,9.524.829,14.295,1.128,2.059.129,4.128.092,6.182.272a37.328,37.328,0,0,1,9.268,2.128c4.732,1.693,9.908,4.364,13.057,8.419-.246-.317.216.315.208.3.126.193.253.385.369.584.085.146.491,1.049.312.568.079.213.288,1.287.231.63a7.584,7.584,0,0,1-.035,1.5,9.211,9.211,0,0,1-2.483,5.319c-2.32,2.425-5.311,3.585-8.76,4.256-.312.06-.63.1-.941.163-.513.108.587-.063.1-.012-.118.013-.235.029-.353.04q-.845.081-1.689.141c-1.526.106-3.055.174-4.584.233-4.184.163-8.372.245-12.56.313-9.018.146-18.038.192-27.057.257-9.214.066-18.5.074-27.66,1.162a60.805,60.805,0,0,0-9.022,1.645c-2.973.821-1.711,5.454,1.276,4.629,6.426-1.774,13.2-2.068,19.827-2.32q5.769-.22,11.541-.284c8.782-.083,17.564-.111,26.345-.221,7.751-.1,15.609.019,23.332-.73,8.25-.8,16.512-5.46,17.464-14.427.512-4.812-3.187-8.427-6.739-11.1a41.783,41.783,0,0,0-17.143-7.406c-4.954-.937-10.1-.806-15.126-1.2-4.5-.356-8.994-.753-13.5-1.049a68.374,68.374,0,0,1-20-4.672,66.062,66.062,0,0,1-14.046-7.942c-9.4-6.577-18.468-13.584-29.358-17.569a43.354,43.354,0,0,0-11.482-2.6,100.707,100.707,0,0,0-17.78.49c-6.263.618-12.772,1.319-18.84,3.058-5.6,1.6-10.865,4.241-16.322,6.257a83.706,83.706,0,0,1-9.946,3.015c-3.007.7-1.734,5.332,1.276,4.628Z" />
                                </g>
                            </svg>                        
                        </IconWrapper>
                        SÍTIO VERDE
                    </SitioVerdeTitle>

                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit volutpat.
                </DivTexto>
            </DivImagem>
            <DivStyled>
                <Sticker title={"PLACAS FOTOVOLTAICAS"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod tincidunt utlaoreet dolore magna aliquam erat volutpat. Ut wisienim ad minim veniam."}/>            
                <img src={imagemVideo} alt="video falso" style={{ width: "100%", height: "auto", objectFit: "contain"}} />                
            </DivStyled>
            <DivStyled2>
                <img src={imagemGrafico} alt="grafico" style={{ width: "100%", height: "auto", objectFit: "contain" }}/>
                <Sticker title={"PROGRAMA 5S"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod tincidunt utlaoreet dolore magna aliquam erat volutpat. Ut wisienim ad minim veniam."}/>
            </DivStyled2>
            <DivStyled>
                <Sticker title={"A GRANDE FAMÍLIA DO SÍTIO: BAZAR"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod tincidunt utlaoreet dolore magna aliquam erat volutpat. Ut wisienim ad minim veniam."}/>
                <img src={imagemBazar} alt="bazar da grande familia" style={{ width: "100%", height: "auto", objectFit: "contain" }}/>                
            </DivStyled>
            <DivStyled2>
                <img src={imagemHorta} alt="grafico" style={{ width: "100%", height: "auto", objectFit: "contain" }}/>
                <Sticker title={"HORTA COMUNITÁRIA"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod tincidunt utlaoreet dolore magna aliquam erat volutpat. Ut wisienim ad minim veniam."}/>
            </DivStyled2>

            <Container>
                <MiniSpace/>
                <SitioSemLixoTitle>SÍTIO SEM LIXO</SitioSemLixoTitle>
     
            
                <SitioSemLixo>    
                    <MiniSticker title={"Xepa do Sítio"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"} index={0}/>
                    <MiniSticker title={"Coleta Seletiva"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"} index={3}/>
                    <MiniSticker title={"Maõs que Criam"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"} index={1}/>
                    <MiniSticker title={"Reutilização de Paletes"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"} index={4}/>
                    <MiniSticker title={"Logística Reversa Eletrônicos"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"} index={2}/>
                    <MiniSticker title={"Projeto Compostar"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"} index={5}/>
                </SitioSemLixo>
                <MiniSpace/>
            </Container>

            

            <DivImagem>                     
                <img src={imagemCampo} alt="video falso" style={{ width: "100%", height: "auto", objectFit: "contain",  display: "block", filter: "brightness(20%) sepia(1) saturate(3) hue-rotate(70deg)"}} />                       
            </DivImagem>
        </>
    );

}