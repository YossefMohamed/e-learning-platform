import Modal from "@/components/Modal";
import Link from "next/link";
import React from "react";
import { BsBook, BsPen, BsPlayBtn, BsStopwatch } from "react-icons/bs";
import request from "@/endpoints/request";
import { useMutation, useQuery } from "react-query";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Rootstate } from "@/redux/store";
import { toast } from "react-hot-toast";
import Spinner from "@/components/Spinner";
import Unit from "@/components/Unit";

function Year() {
  const { isAuthenticated, user, loading } = useSelector(
    (state: Rootstate) => state.userState
  );

  const router = useRouter();

  React.useLayoutEffect(() => {
    if (
      user.course !== router.query.course &&
      user.year !== router.query.year &&
      !user.isAdmin &&
      !loading
    ) {
      toast.error("You are not a participant in this course");
      router.push(`/years`);
    }
    if (!isAuthenticated && !loading) router.push("/login");
  }, [user, isAuthenticated, router.query]);

  const [modal, setModal] = React.useState(false);

  const closeModal = () => {
    setModal(false);
  };
  const openModal = () => {
    setModal(true);
  };

  const course = `${router.query.course}`;
  const unitsResponse = useQuery("years", async () => {
    const res = await request({
      url: `/api/units/${router.query.course}`,
      method: "get",
    }).then((res) => {
      return res.data;
    });

    return res;
  });

  const createUnitResponse = useMutation(async (data: any) => {
    const token: string = localStorage.getItem("token") || "";
    const res = await request({
      url: `/api/units/`,
      method: "post",
      data,
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((res) => {
      return res.data;
    });

    return res;
  });

  const onCreateUnit = (name: string) => {
    !createUnitResponse.isLoading &&
      createUnitResponse.mutate({
        name,
        course,
      });
    createUnitResponse.isLoading && toast.loading("Loading....");
  };

  React.useEffect(() => {
    createUnitResponse.isError && toast.error(createUnitResponse.error);
    createUnitResponse.isSuccess && toast.success("Unit is created !");
    createUnitResponse.isSuccess && unitsResponse.refetch();
    createUnitResponse.isSuccess && closeModal();
  }, [createUnitResponse.isError, createUnitResponse.isSuccess]);

  return (
    <div className="p-10 relative min-h-screen">
      {modal && (
        <div className="absolute top-0">
          <Modal closeModal={closeModal} onSubmit={onCreateUnit} />
        </div>
      )}
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li>
            <div className="flex items-center">
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium"
              >
                Year 10
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-400 ml-1 md:ml-2 text-sm font-medium">
                Maths
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="sec-title w-fit">Course Details</div>

      {unitsResponse.isLoading ? (
        <Spinner />
      ) : (
        <div className="table  w-full">
          {unitsResponse.data.map(
            ({ name, id }: { name: string; id: string }, idx: number) => {
              return (
                <Unit
                  id={id}
                  name={name}
                  key={id}
                  idx={idx + 1}
                  course={course}
                />
              );
            }
          )}
          {/* <div className="t-data w-full text-md border p-6 text-tsecondary justify-between items-center font-bold bg-gray-50 flex">
          <div className="section-title">integration by parts</div>
          <div className="icons flex  gap-4">
            <Link
              href="/years/lesson/1"
              className="play  btn-secondary flex items-center gap-1 font-normal"
            >
              Watch
              <span className="font-bold ">
                <BsPlayBtn />
              </span>
            </Link>
            <Link
              href="/years/lesson/1"
              className="play  btn-secondary flex items-center gap-1 font-normal"
            >
              Exam
              <span className="font-bold ">
                <BsStopwatch />
              </span>
            </Link>
            <Link
              href="/years/lesson/1"
              className="play  btn-secondary flex items-center gap-1 font-normal"
            >
              Home work
              <span className="font-bold ">
                <BsBook />
              </span>
            </Link>

            <Link
              href="/years/lesson/add"
              className="play  btn-secondary flex items-center gap-1 font-normal"
            >
              Edit
              <span className="font-bold ">
                <BsPen />
              </span>
            </Link>
          </div>
        </div> */}

          <div className="t-head w-full text-2xl border p-6 text-tsecondary font-bold flex justify-between">
            <span>Add new unit</span>
            <span className="btn-primary text-sm" onClick={openModal}>
              Add Unit
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Year;
