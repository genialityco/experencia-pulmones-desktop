import { Container, Divider, Flex, Group, Text } from '@mantine/core';
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
            <img src="/images/qr-code-v-f-1.png" alt="Asociación Logo" className={classes.qrImage} />
            <Text m="md" size="xl" c="darkblue">
              INICIAR EXPERIENCIA
            </Text>
          </div>
        </Group>
        <Divider c="blue" style={{ border: '1px solid blue' }} />
        <Text m="md" size="xl" c="darkblue">
          Brindando oportunidades de financiamiento en investigación
        </Text>
        <div className={classes.logoContainerThird}>
          <img src="/images/LOGO_CONQUER.png" alt="Asociación Logo" className={classes.thirdLogo} />
        </div>
      </Container>
    </div>
  );
}
