import React, { useState } from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 16px;
`

const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  position: relative;
`

const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
`

const StepStyle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 3px solid ${({ step }) =>
      step === 'completed' ? '#5c5a5c' : '#d1cfd1'};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StepCount = styled.span`
  font-size: 19px;
  color: #000;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`

const StepsLabelContainer = styled.div`
  position: absolute;
  top: 100px;
`

const StepLabel = styled.span`
  font-size: 12px;
  color: #000;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -15px;
  margin-top: 20px;
`

const ButtonStyle = styled.button`
  border-radius: 4px;
  border: 0;
  background: #f5b105;
  color: #ffffff;
  cursor: pointer;
  padding: 8px;
  width: 90px;
  :active {
    transform: scale(0.98);
  }
  :disabled {
    background: #f3e7f3;
    color: #000000;
    cursor: not-allowed;
  }
`

const CheckMark = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: #000;
  -ms-transform: scaleX(-1) rotate(-46deg); /* IE 9 */
  -webkit-transform: scaleX(-1) rotate(-46deg); /* Chrome, Safari, Opera */
  transform: scaleX(-1) rotate(-46deg);
`

const steps = [
  {
    label: 'Step1',
    step: 1,
  },
  {
    label: 'ご案内',
    step: 2,
  },
  {
    label: 'ご契約',
    step: 3,
  },
  {
    label: '設定 & 稼働',
    step: 4,
  },
]

export default function ProgressSteps() {
  const [activeStep, setActiveStep] = useState(1)

  const nextStep = () => {
    setActiveStep(activeStep + 1)
  }

  const prevStep = () => {
    setActiveStep(activeStep - 1)
  }

  const totalSteps = steps.length

  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`

  return (
    <MainContainer>
      <StepContainer width={width}>
        {steps.map(({ step, label }) => (
          <StepWrapper key={step}>
            <StepStyle step={activeStep >= step ? 'completed' : 'incomplete'}>
              {activeStep > step ? (
                <CheckMark>L</CheckMark>
              ) : (
                <StepCount>{step}</StepCount>
              )}
            </StepStyle>
            <StepsLabelContainer>
              {/* <StepLabel key={step}>{label}</StepLabel> */}
            </StepsLabelContainer>
          </StepWrapper>
        ))}
      </StepContainer>
      <ButtonsContainer>
        <ButtonStyle onClick={prevStep} disabled={activeStep === 1}>
          前へ
        </ButtonStyle>
        <ButtonStyle onClick={nextStep} disabled={activeStep === totalSteps}>
          次へ
        </ButtonStyle>
      </ButtonsContainer>

      {activeStep == 1 ? (
        <div className='ProgressContent' style={{maxWidth: '600px', display:'flex', flexDirection:'column',
        justifyContent:'center', alignContent:'center'}}>
          <h2>お問合せ</h2>
          <img src='images/contact.jpg' alt='contact' style={{maxWidth: '40%', maxHeight:'40%'}}/>
          <h3>お問合せフォームからご連絡ください。<br/>御社専属の担当者が、お伺いいたします。<br/>
          またデモンストレーションも、ご覧いただけます。</h3>
        </div>
      ):("")}

      {activeStep == 2 ? (
        <div className='ProgressContent' style={{maxWidth: '600px', display:'flex', flexDirection:'column',
        justifyContent:'center', alignContent:'center'}}>
          <h2>ご案内</h2>
          <img src='images/meeting.jpg' alt='meeting' style={{maxWidth: '40%', maxHeight:'40%'}}/>
          <h3>御社の状況をお伺いし、御社に最適なサービスを<br/>ご提案をさせていただきます。<br/>
              何でもご相談ください。</h3>
        </div>
      ):("")}

      {activeStep == 3 ? (
        <div className='ProgressContent' style={{maxWidth: '600px', display:'flex', flexDirection:'column',
          justifyContent:'center', alignContent:'center'}}>
          <h2>ご契約</h2>
          <img src='images/contract.jpg' alt='contract' style={{maxWidth: '40%', maxHeight:'40%'}}/>
          <h3>申し込みはオンラインで完結。<br/>
          お支払い方法も豊富に取り揃えています。<br/>ぜひご相談ください。</h3>
        </div>
      ):("")}

      {activeStep == 4 ? (
        <div className='ProgressContent' style={{maxWidth: '600px', display:'flex', flexDirection:'column',
        justifyContent:'center', alignContent:'center'}}>
          <h2>設定 & 本格稼働</h2>
          <img src='images/implementation.jpg' alt='implementation' style={{maxWidth: '40%', maxHeight:'40%'}}/>
          <h3>担当者が御社に出向いて、初期設定いたします。<br/>
          本格稼働前には、ご利用方法など改めて<br/>ひとつひとつご説明いたします。</h3>
        </div>
      ):("")}

      {/* <h2>お問合せ</h2>
      <h3>お問合せフォームからご連絡ください。御社専属の担当者が、お伺いいたします。<br/>
      またデモンストレーションも、ご覧いただけます。</h3>

      <h2>ご案内</h2>
      <h3>御社の状況をお伺いし、御社に最適なサービスをご提案をさせていただきます。<br/>
      何でもご相談ください。</h3>

      <h2>ご契約</h2>
      <h3>申し込みはオンラインで完結。お手間を取らせません。<br/>
      お支払い方法も豊富に取り揃えていますので、ご相談ください。</h3>

      <h2>設定 & 本格稼働</h2>
      <h3>担当者が御社に出向いて、初期設定をいたします。<br/>
      本格稼働前には、ご利用方法など改めてひとつひとつご説明いたします。</h3> */}

    </MainContainer>
  )
}
