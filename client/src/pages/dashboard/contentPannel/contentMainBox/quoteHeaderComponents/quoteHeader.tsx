import { BannerContentStyled, BannerTextStyled, BannerWrraperStyled, BannerImageStyled, BannerText, BannerDescription } from "./QuoteHeaderStyled"
const QuoteHeader = () => {
    return(
       <BannerWrraperStyled>
        <BannerContentStyled>
            <BannerTextStyled>
                <BannerText>Track Your Daily Activities</BannerText>
                <BannerDescription>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                </BannerDescription >
            </BannerTextStyled>
        </BannerContentStyled>
       </BannerWrraperStyled>
    )
}

export default QuoteHeader