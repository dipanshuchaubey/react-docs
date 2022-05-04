module.exports = [{"name":"Alert","description":"Displays an alert message with a bold title","props":{"alert":{"type":{"name":"object"},"required":true,"description":""}},"code":"import React from 'react'\r\nimport PropTypes from 'prop-types'\r\n\r\n/** Displays an alert message with a bold title */\r\nconst Alert = ({ alert }) => {\r\n  return (\r\n    <div>\r\n      <h4>Alert: {alert.title}</h4>\r\n      <h6>{alert.message}</h6>\r\n    </div>\r\n  )\r\n}\r\n\r\nAlert.propTypes = {\r\n  alert: PropTypes.object.isRequired,\r\n}\r\n\r\nexport default Alert\r\n"},{"name":"HelloWorld","description":"This component will say hello to the user","props":{"name":{"type":{"name":"string"},"required":true,"description":""}},"code":"import React from 'react'\r\nimport PropTypes from 'prop-types'\r\n\r\n/** This component will say hello to the user */\r\nconst HelloWorld = ({ name }) => {\r\n  return <div>Hello {name}</div>\r\n}\r\n\r\nHelloWorld.propTypes = {\r\n  name: PropTypes.string.isRequired,\r\n}\r\n\r\nexport default HelloWorld\r\n"},{"name":"SayHello","description":"This component says hello to the currently logged in user","props":{"user":{"type":{"name":"string"},"required":false,"description":"Logged in users username","defaultValue":{"value":"'Dipanshu'","computed":false}},"time":{"type":{"name":"string"},"required":false,"description":"Current time as per users prefered timezone"}},"code":"import React from 'react'\r\nimport PropTypes from 'prop-types'\r\n\r\n/** This component says hello to the currently logged in user */\r\nconst SayHello = ({ user }) => {\r\n  return (\r\n    <div>\r\n      <h3>Hi {user}</h3>\r\n    </div>\r\n  )\r\n}\r\n\r\nSayHello.propTypes = {\r\n  /** Logged in users username */\r\n  user: PropTypes.string.isRequired,\r\n  /** Current time as per users prefered timezone */\r\n  time: PropTypes.string,\r\n}\r\n\r\nSayHello.defaultProps = {\r\n  user: 'Dipanshu',\r\n}\r\n\r\nexport default SayHello\r\n"}]