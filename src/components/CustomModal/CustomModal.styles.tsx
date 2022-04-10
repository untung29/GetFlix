export const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  maxHeight: 450,
  '@media (max-width: 768px)': {
    width: '70%',
  },
  overflow: 'scroll',
  minWidth: '50%',
};

export const centeredComponent = { display: 'flex', justifyContent: 'center' };
export const textColor = { color: '#A8A8A8' };
export const textSpace = { marginTop: '1rem' };
