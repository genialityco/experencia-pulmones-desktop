import { Box, Container, Text } from '@mantine/core';
import classes from './secondslides.module.css';

export function SecondSlide() {
  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <Box className={classes.boxOne}>
          <div className={classes.logoContainer}>
            <img
              src="/images/LOGOS_DESAFIANDO_EL_CANCER-02.png"
              alt="Asociación Logo"
              className={classes.logoCancer}
            />
          </div>
          <div style={{ marginTop: '5px', textAlign: 'left' }}>
            <Text className={classes.description}>
              Pretende promover y apoyar la investigación oncológica de alta calidad en Colombia y
              mejorar la atención del cáncer en el país.
            </Text>
          </div>
        </Box>
        <Box className={classes.boxTwo}>
          <div className={classes.logoContainer}>
            <img src="/images/qr-code-v-f-1.png" alt="Asociación Logo" className={classes.qrImage} />
            <Text m="md" size="xl" c="darkblue">
              INICIAR EXPERIENCIA
            </Text>
          </div>
        </Box>
        <div className={classes.imageBottomOne}>
          <img src="/images/LOGO_CONQUER.png" alt="Conquer Logo" className={classes.logoConquer} />
        </div>
        <div className={classes.imageBottomTwo}>
          <img
            src="/images/LOGO_ASOCIACION.png"
            alt="Asociación Logo"
            className={classes.logoAsociacion}
          />
        </div>
      </Container>
    </div>
  );
}
