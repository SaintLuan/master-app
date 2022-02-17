import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';

import Title from '../Title';
import ImageHover from '../ImageHover';
import svgTitle from "../../assets/img/svg/services.svg";
import { CaseContainer } from './CasesElements';


const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(18),
      marginRight: theme.spacing(1),
      color: '#3D3473',
      '&.Mui-selected': {
        color: '#3D3473',
      },
      '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
      },
    }),
);

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <article
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </article>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
  

const CasesSecion = () => {

  // Configurações de estado das Tabs
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
      setValue(newValue);
  };

  // Ajuste de rolagem para tabs (apenas no mobile)
  const isScrollale = useMediaQuery('(max-width:480px)') ? 'scrollable' : '';

  // Consumindo dados para as tabs

  //Cases Fetch
  const [uiux, setUiux] = React.useState([]);
  const [webSist, setWebSist] = React.useState([]);
  const [ecommerce, setEcommerce] = React.useState([]);
  const [lp, setLp] = React.useState([]);

  React.useEffect(()=>{

    // Fetch UiUx
    fetch('./data/cases.json',{
        headers:{
            Accept: "application/json"
        }
    }).then(res => res.json())
      .then(res => setUiux(res.uiux) 
    );

    // Fetch Sistemas Web
    fetch('./data/cases.json',{
      headers:{
          Accept: "application/json"
      }
    }).then(res => res.json())
      .then(res => setWebSist(res.websist) 
    );
  },[]);

  
  
  return (
      <>
          <Title span='Cases' svg={svgTitle}>Confira nossos Projetos</Title>

          <Box sx={{ width: '100%' }}>
              <Box >
                  <StyledTabs
                      value={value}
                      onChange={handleChange}
                      aria-label="styled tabs example"
                      centered
                      variant={isScrollale}
                  >
                      <StyledTab label="UI/UX Design" {...a11yProps(0)}/>
                      <StyledTab label="Sistemas Web" {...a11yProps(1)}/>
                      <StyledTab label="E-Commerce" {...a11yProps(2)}/>
                      <StyledTab label="Landing Page" {...a11yProps(3)}/>
                  </StyledTabs>

                   <TabPanel value={value} index={0}>
                      <CaseContainer>
                        {
                          uiux.map(({id, title, image, text, bgcolor})=>(
                            <ImageHover 
                              key={id}
                              src={image}
                              title={title}
                              bgcolor= {bgcolor}
                              text={text}
                            />
                          ))
                        }
                      </CaseContainer>
                  </TabPanel>
                  

                  <TabPanel value={value} index={1}>
                      <CaseContainer>
                        {
                          
                          webSist.map(({id, title, image, text, bgcolor})=>(
                            <ImageHover 
                              src={image}
                              title={title}
                              bgcolor= {bgcolor}
                              text={text}
                            />
                          ))
                        }
                      </CaseContainer>
                  </TabPanel>
                  
              </Box>
          </Box>
      </>
  );
}

export default CasesSecion;
