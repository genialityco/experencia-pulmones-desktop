import { Container, Divider, Flex, Group, Paper, Text } from '@mantine/core';
import classes from './fitstslides.module.css';

export function FirstSlide() {
  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <Group justify="center" gap="lg">
          <Flex direction="column">
            <div className={classes.logoContainer}>
              <img
                src="/images/LOGOSIMBOLO_ASOCIACION.png"
                alt="Asociación Logo"
                className={classes.firstLogo}
              />
            </div>
            <div className={classes.logoContainer}>
              <img
                src="/images/LOGOS_DESAFIANDO_EL_CANCER-03.png"
                alt="Asociación Logo"
                className={classes.secondLogo}
              />
            </div>
          </Flex>
          <div className={classes.logoContainer}>
            <img
              src="/images/qr-code-v-f-1.png"
              alt="Asociación Logo"
              className={classes.qrImage}
            />
            <Text m="md" size="xl" c="darkblue">
              INICIAR EXPERIENCIA
            </Text>
          </div>
        </Group>
        <Divider c="blue" style={{ border: '1px solid blue' }} />
        <div style={{ display: 'flex' }}>
          <div style={{width: '80%', textAlign: 'left'}}>
            <Text m="md" size="xl" c="darkblue">
              Brindando oportunidades de financiamiento en investigación
            </Text>
          </div>
          <div className={classes.logoContainerThird}>
            <img
              src="/images/LOGO_CONQUER.png"
              alt="Asociación Logo"
              className={classes.thirdLogo}
            />
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div>
            <Paper
              style={{
                width: '240px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <Text m="md" size="lg" c="darkblue" style={{ fontWeight: 'bold', color: 'darkblue' }}>
                Red WiFi: <span style={{ color: 'green' }}>Whotels_conference</span>
              </Text>
              <Text m="md" size="lg" c="darkblue" style={{ fontWeight: 'bold', color: 'darkblue' }}>
                Contraseña: <span style={{ color: 'green' }}>Simposio2024</span>
              </Text>
            </Paper>
          </div>
        </div>
      </Container>
    </div>
  );
}
