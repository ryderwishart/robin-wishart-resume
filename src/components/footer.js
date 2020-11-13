import React from "react"

const Footer = props => {
  return (
    <div id="footer">
      <div className="column">
        <p id="cp">
          &copy; {props.name}
          <br />
            {`"If you want to build a ship, don't drum up men to gather the
              wood, divide the tasks, and give orders; but rather teach them to
              yearn for the vast and endless sea."`}
            <br />– Antoine de Saint-Exupery
          </p>
        <div style={{ maxWidth: 300 }}></div>
      </div>
    </div>
  )
}

export default Footer
