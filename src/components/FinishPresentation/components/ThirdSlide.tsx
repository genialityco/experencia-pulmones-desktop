import { Box, Container, Flex, Group, Text, Title } from '@mantine/core';
import classes from './thirdslides.module.css';

export function ThirdSlide() {
  return (
    <div className={classes.wrapper}>
      <Group justify="center">
        <Flex direction="row">
          <Container className={classes.container}>
            <Title className={classes.titleBlue}>LOGRASTE</Title>
            <Title className={classes.titleBlue}>DESAFIAR</Title>
            <Title className={classes.titleBlue}>EL CÁNCER</Title>
            <div className={classes.logoContainer}>
              <img
                src="/images/SIMBOLO_MAS.png"
                alt="Asociación Logo"
                className={classes.plusImage}
              />
            </div>
            <Title className={classes.titleBlue}>LA LABOR</Title>
            <Title className={classes.titleBlue}>CONTINUA</Title>
            <div style={{ marginTop: '5px' }}>
              <Text className={classes.description}>La Asociación Colombiana</Text>
              <Text className={classes.description}>de Hematología y Oncología,</Text>
              <Text className={classes.description}>lanza su programa</Text>
            </div>
            <div className={classes.logoContainer}>
              <img
                src="/images/LOGOS_DESAFIANDO_EL_CANCER-02.png"
                alt="Asociación Logo"
                className={classes.logoCancer}
              />
            </div>
            <div style={{ marginBottom: '8px' }}>
              <Text className={classes.subDescription}>en alianza con</Text>
              <Text className={classes.subDescription}>Conquer Cancer ASCO Fundation...</Text>
            </div>
          </Container>

          <Container className={classes.containerOne}>
            <div style={{ marginTop: '5px', textAlign: 'right' }}>
              <Text className={classes.description}>En Octubre, espera toda la información</Text>
              <Text className={classes.description}>y requisitos para participar</Text>
            </div>

            {/* Box para la tarjeta de subvenciones */}
            <Box className={classes.grantBox}>
              <div className={classes.textContent}>
                <Text className={classes.grantTitle}>
                  DOS SUBVENCIONES DE INVESTIGACIÓN PARA INVESTIGADORES NIVEL SUPERIOR DE
                </Text>
                <Text className={classes.grantSubtitle}>
                  Aprox. $300.000.000 de pesos colombianos.
                </Text>
              </div>
              <div className={classes.amountContent}>
                <Text className={classes.amountText} c="lime">
                  USD 75.000
                </Text>
                <Text className={classes.amountSubText} c="lime">
                  c/u
                </Text>
              </div>
            </Box>

            <Box className={classes.grantBox}>
              <div className={classes.textContent}>
                <Text className={classes.grantTitle}>
                  DOS SUBVENCIONES DE INVESTIGACIÓN PARA INVESTIGADORES NIVEL MEDIO DE
                </Text>
                <Text className={classes.grantSubtitle}>
                  Aprox. $100.000.000 de pesos colombianos.
                </Text>
              </div>
              <div className={classes.amountContent}>
                <Text className={classes.amountText} c="lime">
                  USD 25.000
                </Text>
                <Text className={classes.amountSubText} c="lime">
                  c/u
                </Text>
              </div>
            </Box>

            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBlock: '10px',
              }}
            >
              <div>
                <img
                  src="/images/LOGO_CONQUER.png"
                  alt="Conquer Logo"
                  className={classes.logoConquer}
                />
              </div>
              <div>
                <img
                  src="/images/LOGO_ASOCIACION.png"
                  alt="Asociación Logo"
                  className={classes.logoAsociacion}
                />
              </div>
            </div>
          </Container>
        </Flex>
      </Group>
    </div>
  );
}
