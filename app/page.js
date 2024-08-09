"use client";
import { Button } from "antd";
import "react-multi-carousel/lib/styles.css";
import ProductCarousel from "./component/productCarousel";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  getProductKebutuhanRumah,
  getProductKesehatan,
} from "./services/getProduct";

export default function Home() {
  const { data } = useQuery({
    queryKey: ["getKebutuhanRumah"],
    queryFn: getProductKebutuhanRumah,
  });
  const { data: dataKesehatan } = useQuery({
    queryKey: ["getKesehatan"],
    queryFn: getProductKesehatan,
  });

  return (
    <main>
      <section>
        <div className="flex items-center relative px-7 py-10">
          <div className="hidden lg:block">
            <div
              style={{
                width: "325px",
                height: "417px",
                padding: "3rem 2rem",
                backgroundPosition: "50%",
                borderRadius: "1rem",
                backgroundSize: "cover",
                background:
                  "url(https://marketplace.santrichain.id/assets/images/home/bg-ktr-kebutuhan-rumah.jpg)",
              }}
            >
              <div className="text-3xl text-white">
                Kebutuhan <br /> Rumah
              </div>
            </div>
          </div>
          <ProductCarousel
            categoryMobileView="Kebutuhan Rumah"
            data={data?.data?.data?.products}
          />
        </div>
      </section>
      <section>
        <div className="flex items-center relative px-7 py-10">
          <div>
            <div
              className="hidden lg:block"
              style={{
                width: "325px",
                height: "417px",
                padding: "3rem 2rem",
                backgroundPosition: "50%",
                borderRadius: "1rem",
                backgroundSize: "cover",
                background:
                  "url(https://marketplace.santrichain.id/assets/images/home/bg-ktr-kesehatan.jpg)",
              }}
            >
              <div className="text-3xl text-white">Kesehatan</div>
            </div>
          </div>
          <ProductCarousel
            categoryMobileView="Kesehatan"
            data={dataKesehatan?.data?.data?.products}
          />
        </div>
      </section>
    </main>
  );
}
