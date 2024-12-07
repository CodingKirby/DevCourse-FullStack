import Button from "../components/common/Button";
import InputText from "../components/common/InputText";
import Title from "../components/common/Title";

function Home() {
    return (
        <>
            <Title size="medium">
                제목 테스트
            </Title>
            <Button size="large" scheme="normal">
                버튼 테스트
            </Button>
            <InputText placeholder="여기에 입력" />
            <div>
                Home body
            </div>
        </>
    )
}

export default Home;