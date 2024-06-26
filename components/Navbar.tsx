import Link from "next/link";
import Container from "./ui/Container";
import MainNav from "./MainNav";
import { getCategories } from "@/actions/get-categories";
import NavbarActions from "./NavbarActions";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative flex px-4 sm:px-6 lg:px-8 h-16 items-center">
          <Link className="ml-4 flex lg:ml-0 gap-x-2" href={"/"}>
            <p className="font-bold text-xl">Store</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
