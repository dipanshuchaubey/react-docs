import Alert from 'react-docs/Alert'

const DarkAlert = () => {
  return (
    <div>
      <Alert
        theme="dark"
        alert={{
          title: 'Danger!!',
          message: 'This is an alert.',
        }}
      />
    </div>
  )
}

export default DarkAlert
