import React from 'react'
import styled from 'styled-components'

const PricingCard = ({primary, title, subtitle, price, children}) => {
  return (
    <PricingCardStyle className={primary ? "active" : ""}>
        <h4>{title}</h4>
        <p>{subtitle}</p>
        <div className="price-tag">
            <h6>{price}</h6>
        </div>
        {children}
        <a href="https://chat.whatsapp.com/BzGBw93KzPi8toOyzS3WhU">Enroll for this plan</a>
    </PricingCardStyle>
  )
}

export default PricingCard

const PricingCardStyle = styled.div`
    width: 95%;
    padding: 2.5rem 1.5rem;
    background: #FFFADE;
    border: none;
    max-height: 760px;
    position: relative;

    a {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -1.5rem;
        font-size: 1rem;
        color: #fff;
        line-height: 104%;
        padding: 1rem 0;
        background: #EA233F;
        box-shadow: 0px 0px 30px rgba(65, 135, 123, 0.25);
        margin-top: 2rem;
        text-decoration: none;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 195px;

        .icons {
            margin-left: .8rem;
            font-size: 1.5rem;
        }

        &:hover {
            background: #99434f;
            color: #fff;
        }
    }

    &.active {
        border: 4px solid #090C9B;
        background: #F6FDFE;
        max-height: 1400px;
    }

    h4 {
        font-size: 1.25rem;
        font-weight: 700;
        font-family: 'nexabold', sans-serif;
        color: #0A033C;
        text-transform: uppercase;
    }

    .price-tag {
        width: 100%;
        max-width: 281px;
        padding: 10px 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #FBB800;
        border-radius: 19px;
        margin-bottom: 2rem;
        margin-top: .75rem;

        h6 {
            color: #0A033C;
            font-size: 1.5rem;
            font-weight: 700;
            font-family: 'nexabold', sans-serif;
        }
    }

    p {
        font-size: .9rem;
        font-weight: 800;
        font-family: 'nexabold', sans-serif;
        margin-bottom: .8rem;
        color: #0A033C;
    }
`