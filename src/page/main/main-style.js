import styled from "styled-components";

import {  InfoOutlined, BatteryFull, BatteryAlert, BatteryUnknown } from '@mui/icons-material';

export const Wrapper = styled.div`
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    
    margin-top: 4rem;
    margin-left: calc(15% + 40px);
    background-color: var(--light);
    border-radius:40px;
    width: 80%;
`;

export const CardTop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 10rem;
    margin: 4rem auto 1rem;
    background: rgb(2, 0, 36);
    background: linear-gradient(40deg, rgba(2,0 ,36, 1) 0%, rgba(0, 0, 0, 1) 0%, rgb(7, 6, 7) 55%, rgb(114, 87, 54) 100%);
    box-shadow: -3px 20px 37px -16px rgba(9,9,9,0.57);
    -webkit-box-shadow: -3px 20px 37px -16px rgba(9,9,9,0.57);
    -moz-box-shadow: -3px 20px 37px -16px rgba(9,9,9,0.57);
    border-radius: 15px;
    position: relative;
`;

export const Info = styled.div`
    width: 100%;
    color: var(--white);
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* flex-wrap: wrap; */
`;

export const UInfo = styled.div`
    display: flex;
    align-items: center;

    h3{
        font-size: 1.6rem;
        margin-right: 1rem;
        letter-spacing:.05rem;
        font-weight: 500;
    }
    h2{
        font-size: 1.8rem;
        letter-spacing:.05rem;
        font-weight: 600;
    }
`;

export const BInfo = styled(UInfo)``;
export const VInfo = styled(UInfo)``;

export const InfoIcon = styled(InfoOutlined)`
    &&{
        color: var(--white);
        font-size: 2.95rem;
        position: absolute;
        top: 1rem;
        right: 1rem;
    }
`;

export const BelowContainer = styled.div`
    width: 90%;
    margin: 5rem auto 1rem;
    display: flex;
    justify-content: space-between;
`;

export const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

// ------------------------------------------
export const LeftUpper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 3px;
    background: var(--light);
    border-radius: 15px;
    box-shadow:  9px 9px 22px #1a1a1d,
                -9px -9px 22px #2c2b31;
    width: 100%;
    height: 13rem;
    color: var(--white);
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: 0.3px;
    
`;
export const ToggleLeft = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 30%;

    .leftSide1, .leftSide2{
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
    .leftSide2{
        margin-top: 1rem;
    }
`;
export const ToggleRight = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--white);
    width: 30%;

    .rightSide1, .rightSide2{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .rightSide2{
        margin-top: 1rem;
    }
`;

// ---------------------------------------------

export const LeftMiddle = styled.div`
    background: var(--light);
    border-radius: 15px;
    box-shadow:  9px 9px 22px #1a1a1d,
                -9px -9px 22px #2c2b31;
    width: 100%;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    padding: 10px;
`;
export const LeftMiddleUpper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 2rem;
`;
export const ProgressBar1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    p{
        color: var(--white);
        font-size: 1.6rem;
        font-weight: 600;
        letter-spacing: 0.3px;
        margin-bottom: 2rem;
    }
`;
export const ProgressBar2 = styled(ProgressBar1)``;

export const Table = styled.div`
    
    table{
        width: 100%;
        color: var(--white);
        border: .5px solid #c9c9c9;
        border-collapse: collapse;

        th{
            text-align: center;
            padding: 7px;
            font-size: 1.6rem;
            border-bottom: .2px solid #c9c9c9;
        }
        td{
            font-size: 1.4rem;
            padding: 7px;
            text-align: center;
            border-bottom: .2px solid #8f8f8f;
        }

    }

`;


export const LeftMiddleLower = styled.div`
    display: flex;
    color: var(--white);
    margin: 4rem 0rem 1rem 0rem;
    justify-content: space-evenly;
    align-items: center;
`;
export const BatteryV = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
        font-size: 1.4rem;
        font-weight: 600;
    }
`;
export const BatteryD = styled(BatteryV)``;
// -------------------------------------------

export const LeftLower = styled(LeftMiddle)`
    flex-direction: row;
    justify-content: space-around;
`;
export const LeftLower1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #c9c9c9;
    margin-top: 1rem;

    p{
        font-size: 1.6rem;
        font-weight: 600;
        margin-bottom: 2rem;
    }
    
`;
export const LeftLower2 = styled(LeftLower1)``;
export const LeftLower3 = styled(LeftLower1)``;
// ---------------------------------------------------

export const Right = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50rem;
    padding: 5px;
`;
export const RightUpper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: #c9c9c9;
    
    .selectMenu{
        font-size: 1.6rem;
        font-weight: 600;

        p{
            margin-bottom: .5rem;
        }
    }
`;

export const ActiveBattery = styled(BatteryFull)`
    &&{
        fill: #00be55;
        font-size: 120px;
        border: 0.1px solid #00be55;
        
    }
`;
export const DiscontinuedBattery = styled(BatteryUnknown)`
    &&{
        fill: #be0000;
        font-size: 120px;
        border: 0.1px solid #be0000;
    }
`;
export const MaintenanceBattery = styled(BatteryAlert)`
    &&{
        fill: #001cbe;
        font-size: 120px;
        border: 0.1px solid #001cbe;
    }
`;


export const RightLower = styled.div`
    border: .5px solid #c9c9c9;
    color: var(--white);
    width: 100%;
    height: 100%;
    margin-top: 5rem;
    text-align: center;
    padding: 1rem;
`;

// ----------------------------------

export const ThirdPart = styled.div`
    width: 90%;
    margin: 10rem auto 1rem;
`;
export const ThirdUpper = styled.div`
    
    table{
        width: 100%;
        color: var(--white);
        border: .5px solid #c9c9c9;
        border-collapse: collapse;

        th{
            text-align: center;
            padding: 7px;
            font-size: 1.6rem;
            border-bottom: .2px solid #c9c9c9;
        }
        td{
            font-size: 1.6rem;
            font-weight: 600;
            padding: 7px;
            text-align: center;
            border-bottom: .2px solid #8f8f8f;
        }

    }
    
`;
export const ThirdLower = styled.div`

    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 10rem auto 1rem;
    
`;
export const ThirdLowerLeft = styled.div`
    background: var(--light);
    border-radius: 15px;
    box-shadow:  9px 9px 22px #1a1a1d,
                -9px -9px 22px #2c2b31;
    width: 55%;
    height: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;
export const Map = styled.div`
    padding: 10px;
    p{
        width: 100%;
        
        text-align: center;
        color: var(--white);
        font-size: 1.6rem;
        font-weight: 500;
        font-style: italic;
    }
`;
export const ThirdLowerRight = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
`;
export const ThirdLowerRight1 = styled.div`
    background: var(--light);
    border-radius: 15px;
    box-shadow:  9px 9px 22px #1a1a1d,
                -9px -9px 22px #2c2b31;
    height: 14rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p{
        color: #c9c9c9;
        font-size: 1.55rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    h4{
        color: var(--white);
        font-size: 2rem;
        border: 1px solid #c9c9c9;
        border-radius: 50%;
        padding: 15px;
    }
`;
export const ThirdLowerRight2 = styled(ThirdLowerRight1)`
    margin-top: 2rem;
`;

export const Graph = styled.div`
    width: 90%;
    margin: 10rem auto 1rem;
`;