import Container from "@/components/Container";
import Header from "@/components/Header";
import NewPost from "@/components/NewPost";
import Dashboard from "@/components/Dashboard";


export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <section className="my-12">
          <NewPost />
        </section>
        <section>
          <Dashboard />
        </section>
      </Container>
    </>
  );
}
