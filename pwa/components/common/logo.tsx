import Image from 'next/image';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

export default function Logo() {
  return (
    <>
      <Container>
        <div style={{margin: 'auto',marginBottom: '20px', marginTop: '10px', width: '400px'}}>
          <Link href="/">
            <Image src="https://www.nijmegen.nl/typo3conf/ext/nijmegen_sitepackage/Resources/Public/Images/svg/beeldmerklabelrood.svg" height={75} width={300} alt="Picture of the author"/>
          </Link>
        </div>
      </Container>
    </>
  )
}
