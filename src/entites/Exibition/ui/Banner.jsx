import React from 'react'
import NavigationBar from '../../../shared/components/Header'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Banner() {
    return (
        <Slide>
            <Card>
                <CardImg></CardImg>
            </Card>
        </Slide>
    )
}

const Slide=styled.div`

`;

const Card=styled.div``;

const CardImg=styled.div``;
