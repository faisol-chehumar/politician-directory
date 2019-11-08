import React from "react"

import "../../styles/global.css"

const VoteLogCard = ({ passed, approve, total_voter }) => (
  <div
    style={{
      margin: ".5rem",
      fontSize: "1.1rem",
      borderRadius: ".8rem",
      padding: "2rem",
      fontFamily: "Thonburi, Arial, sans-serif",
      backgroundColor: "#fff",
      color: "#000",
    }}
  >
    <div>ba</div>
    <div>
      <span
        css={{
          fontSize: "5rem",
          fontFamily: "var(--ff-title)",
          marginBottom: "2rem",
          display: "block",
        }}
      >
        {`${Math.floor((approve / total_voter) * 100)}% เห็นด้วย`}
      </span>
      <h3>
        ร่างข้อบังคับการประชุมสภาผู้แทนราษฎร พ.ศ. .... ซึ่งคณะกรรมาธิการวิสามัญ
        พิจรณาเสร็จแล้ว
      </h3>
       
      <p>
        The democrat party sdfdsfdsf sdfdsfdsfdsfdsfdsfdsfds dsfsdfhfghlkkfasdlf
        sadfasdfkoaspdfkp
        dsfadfdsagfdhfklsgjiodsjgoisjdflgdfsmglkjfdsgljfdsoigjiodsjgoijdsfoigjosdfjgiodsfjgoijfd
        dfgjoidfsjgofdjsgoifj.
      </p>
      <div>
        <span>ไม่ผ่าน</span>
        <ul>
          <li>เห็นด้วย 101</li>
          <li>ไม่เห็นด้วย 335</li>
          <li>งดออกเสียง 13</li>
        </ul>
      </div>
      <footer>
        <span>29.10.2019</span>
      </footer>
    </div>
  </div>
)

VoteLogCard.propTypes = {}

VoteLogCard.defaultProps = {}

export default VoteLogCard
