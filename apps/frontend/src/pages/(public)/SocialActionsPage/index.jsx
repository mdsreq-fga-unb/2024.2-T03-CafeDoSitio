import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Paginacao from "../../../components/Paginacao";

import {
    Text,
    Title,
    Space
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

            
        </>
    );

}