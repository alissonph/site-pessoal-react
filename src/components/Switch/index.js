import styled from 'styled-components';
import dark from '../../assets/icons/weather-night.svg';
import light from '../../assets/icons/white-balance-sunny.svg';

export const Switch = styled.label`
  position: absolute;
  top: 20px;
  right: 20px;
  display: inline-block;
  width: 60px;
  height: 30px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.colors.backgroundTertiary};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 40px;
    width: 40px;
    left: 0px;
    bottom: 4px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    box-shadow: 0 0px 15px #2020203d;
    background: white url(${dark});
    background-repeat: no-repeat;
    background-position: center;
  }

  input:checked + .slider {
    background-color: ${props => props.theme.colors.primary};
  }

  input:focus + .slider {
    box-shadow: 0 0 1px ${props => props.theme.colors.primary};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(24px);
    -ms-transform: translateX(24px);
    transform: translateX(24px);
    background: white url(${light});
    background-repeat: no-repeat;
    background-position: center;
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;