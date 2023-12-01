import Find from '../components/Find/Find';
import Container from 'react-bootstrap/Container';
import Layout from '../Layout/Layout';


export default function FindPage() {
    return (
        <>
            <Layout>
                <Container style={{ minHeight: '75vh' }}>
                    <Find />
                </Container>
            </Layout>
        </>
    );
}