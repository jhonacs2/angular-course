export const ipSearchStyles = `
<style>
 .it-main-ip-tracker {
     width: 100vw;
     height: 100vh;
     background-color: #1976d2;
     display: grid;
     grid-template-rows: 30fr 70fr;
}
 .it-section-search {
     background-image: url("/assets/images/pattern-bg-desktop.png");
     background-repeat: no-repeat;
     background-size: cover;
     height: 100%;
}
 .it-container-search {
     padding: 3rem 2rem 2rem 2rem;
     display: flex;
     flex-direction: column;
     align-items: center;
     flex-wrap: wrap;
     gap: 2rem;
     position: relative;
     height: 100%;
}
 .it-text-ip {
     font-size: 3rem;
     font-weight: 500;
     color: #fff;
     letter-spacing: 1px;
}
 .it-container-input-ip {
     width: 40%;
     display: flex;
}
 .it-container-input-text {
     width: 100%;
     font-family: inherit;
     font-size: 1.8rem;
     padding: 1.5rem 3rem;
     border: none;
     letter-spacing: 1px;
     border-top-left-radius: 1rem;
     border-bottom-left-radius: 1rem;
}
 .it-container-input-text:focus {
     outline: 3px solid var(--very-dark-gray);
}
 .it-button-input-text {
     background-color: var(--very-dark-gray);
     border: none;
     padding: 1.2rem 2.4rem;
     border-top-right-radius: 1rem;
     border-bottom-right-radius: 1rem;
}
 .it-container-details-ip {
     background-color: #ffffff;
     display: grid;
     grid-template-columns: 1fr 1fr 1fr 1fr;
     font-size: 1.2rem;
     font-weight: 500;
     gap: 3rem;
     max-width: 110rem;
     padding: 3.5rem 3rem;
     border-radius: 2rem;
     position: absolute;
     top: 0;
     transform: translate(0px, 125%);
     z-index: 500;
     transition: all 0.3s;
}
 .it-text-title {
     text-transform: uppercase;
     margin-bottom: 1rem;
     font-weight: 700;
     color: var(--dark-gray);
}
 .it-container-text-detail {
     color: var(--very-dark-gray);
     letter-spacing: 1px;
}
 .it-container-text-detail:not(:last-child) {
     border-right: 1.6px solid hsla(0, 0%, 59%, 0.56);
    ;
}
 .it-text-details {
     font-size: 2.4rem;
     width: 70%;
}
 @media (max-width: 70em) {
     .it-container-input-text {
         font-size: 1.5rem;
    }
     .it-container-details-ip {
         max-width: 100rem;
    }
     .it-text-details {
         font-size: 2rem;
    }
}
 @media (max-width: 63em) {
     .it-container-input-text {
         font-size: 1.3rem;
    }
     .it-container-input-ip {
         width: 60%;
    }
     .it-container-details-ip {
         max-width: 79rem;
         transform: translate(0px, 120%);
    }
     .it-text-title {
         font-size: 1rem;
    }
     .it-text-details {
         font-size: 1.5rem;
    }
}
 @media (max-width: 51em) {
     .it-container-details-ip {
         transform: translate(0px, 80%);
    }
     .it-container-details-ip {
         grid-template-columns: 1fr 1fr;
    }
     .it-container-text-detail:not(:last-child) {
         border-right: none;
    }
}
 @media (max-width: 41em) {
     .it-container-input-ip {
         width: 70%;
    }
}
 @media (max-width: 34em) {
     .it-text-ip {
         font-size: 2.5rem;
    }
     .it-container-input-ip {
         width: 27rem;
    }
     .it-container-details-ip {
         max-width: 27rem;
         grid-template-columns: 1fr;
         padding: 2rem 3rem;
         transform: translate(0px, 52%);
         text-align: center;
    }
     .it-text-details {
         width: 100%;
    }
}
</style>
`
