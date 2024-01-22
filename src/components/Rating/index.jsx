import { Container } from "./styles";
import StarChecked from "../../assets/Home/star.png"
import StarNoChecked from "../../assets/Home/star-empty.png"

export function Rating ({ratingnumber, ...rest}) {
    
    if (ratingnumber > 5) {
        ratingnumber = 5
    }
    
    let starChecked = []
    let starNoChecked = []
    for (let i = 0; i < ratingnumber; i++) {
        starChecked.push(<img src={StarChecked} alt="imagem de uma estrela com preenchimento"/>)
    }

    if (ratingnumber < 5) {
        ratingnumber = 5 - ratingnumber
        for (let i = 0; i < ratingnumber; i++) {
            starNoChecked.push(<img src={StarNoChecked} alt="imagem de uma estrela sem preenchimento"/>)
        }
    }
    
    return (
        <Container {...rest}>
    
            {starChecked}
            {starNoChecked}

        </Container>
    )
}