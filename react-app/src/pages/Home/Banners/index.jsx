import React, { useEffect } from 'react'
import { BannersWrapper } from './style'
import Swiper from 'swiper'

export default function Banners() {
    let swiper = null;
    useEffect(() => {
        // swiper 不能多次实例化 
        if (swiper) {
            return 
        }
        new Swiper('.btn-banners', {
            loop: true,
            autoplay: {
                delay: 2000
            },
            pagination: {
                el: '.swiper-pagination'
            }
        })
    }, [])
    return (
    <BannersWrapper>
        <div className="btn-banners swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <p>
                        <img width="100%" src="https://puui.qpic.cn/media_img/lena/PICw0n5js_580_1680/0" /> 
                    </p>
                </div>
                <div className="swiper-slide">
                    <p>
                        <img width="100%" src="https://vc.qpic.cn/tpic/mtviw4vsGBMdU/4ney5967pvoxn686/1680" />
                    </p>
                </div>
                <div className="swiper-slide">
                    <p>
                        <img width="100%" src="https://puui.qpic.cn/media_img/lena/PICv1znd5_580_1680/0" /> 
                    </p>
                </div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
    </BannersWrapper>
    )
}