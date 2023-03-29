import ShowTooltipSlider from "@/components/ShowTooltipSlider";
import { Heading } from '@chakra-ui/react'

export default function CreditPaymentHistory(){


  const handleCreditHistoryChange = (v) => {
    if (v != creditHistoryValue) {
        setCreditHistoryValue(v)
        }
    }
    return (
        <>
        <Heading size="lg" textTransform="uppercase">
                Credit History
        </Heading>
        <ShowTooltipSlider onCreditData={handleCreditHistoryChange}></ShowTooltipSlider>
        </>
        )
}