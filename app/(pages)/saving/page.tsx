"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Spinner } from "@nextui-org/react";
import { Skeleton } from "@/components/ui/skeleton";
import Chatbot from "@/components/ui/chatbot";

export type Saving = {
  id: number;
  date: Date;
  amount: number;
};

const columns = [
  {
    key: "id",
    label: "No",
  },
  {
    key: "day",
    label: "Day",
  },
  {
    key: "date",
    label: "Date",
  },
  {
    key: "amount",
    label: "Amount",
  },
];

interface savingData {
  id: number;
  date: Date;
  amount: number;
}

const SavingsPage = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const verifyButtonRef = useRef<HTMLButtonElement | null>(null);

  const [webcamActive, setWebcamActive] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [showSpinner, setShowSpinner] = useState(false);
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [rows, setRows] = useState<savingData[]>([]);
  const [total, setTotal] = useState("");
  const [nominalAdd, setNominalAdd] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get the value from local storage
    const userId = localStorage.getItem("session");

    // Check if the value exists
    if (userId !== null) {
      setLoading(true);
      console.log("Value from local storage:", userId);
      fetch(`/api/all-saving`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "user-id": userId,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // Update state
          console.log(data.data);
          let sums = data.data.reduce(
            (acc: number, curr: savingData) => acc + curr.amount,
            0
          );
          const formattedSum = sums.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          });
          setRows(data.data);
          setTotal(formattedSum);
        });
    } else {
      console.log("Value not found in local storage");
      // ini redirect ke login
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    const startWebcam = async () => {
      try {
        const userMediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = userMediaStream;
          setStream(userMediaStream);
          videoRef.current.onloadedmetadata = () => {
            setWebcamActive(true);
          };
        }
      } catch (error) {
        console.error("Error accessing webcam:", error);
      }
    };

    startWebcam(); // Start webcam when the component mounts

    return () => {
      // Clean up by stopping the webcam when the component unmounts
      stopWebcam();
    };
  }, []);

  const startWebcam = async () => {
    try {
      const userMediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = userMediaStream;
        setStream(userMediaStream);
        videoRef.current.onloadedmetadata = () => {
          setWebcamActive(true);
        };
      }
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };

  const stopWebcam = () => {
    if (stream) {
      stream.getTracks().forEach((track) => {
        track.stop();
      });
      setStream(null);
      setWebcamActive(false);
    }
  };

  const stopVideo = () => {
    if (videoRef.current && videoPlaying) {
      videoRef.current.pause();
      setVideoPlaying(false);
    }
  };

  const captureImage = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const imageBase64 = canvas.toDataURL("image/png");

      setCapturedImage(imageBase64);
    }

    setShowSpinner(true);

    setTimeout(() => {
      setVerificationSuccess(true);
      setShowSpinner(false);
      stopVideo(); // Memanggil stopVideo() setelah mengambil gambar
      stopWebcam(); // Memanggil stopWebcam() setelah mengambil gambar
    }, 3000);
  };

  return (
    <main className="flex min-h-screen w-full">
      {/* Savings Page */}
      <div className="flex flex-col items-center justify-center w-full h-screen text-white z-20 space-y-5">
        <h1 className="font-riffic text-6xl py-10">Savings</h1>
        <div className="flex space-x-40">
          <div className="space-y-5">
            <h1 className="font-poppins text-2xl items-start text-center font-bold">
              History Menabung
            </h1>
            {loading ? (
              <Skeleton className="w-[275px] h-[301px]" />
            ) : (
              <div className="rounded-md border-hidden text-black w-full bg-black">
                <Table className="h-1/10 overflow-y-auto bg-black">
                  <TableHeader columns={columns} className="bg-black">
                    {(column: { key: any; label: any }) => (
                      <TableColumn key={column.key}>{column.label}</TableColumn>
                    )}
                  </TableHeader>
                  <TableBody items={rows}>
                    {(item) => (
                      <TableRow key={item.id}>
                        {(columnKey) => (
                          <TableCell>
                            {columnKey === "date"
                              ? new Date(item.date).toLocaleDateString() // Konversi tanggal menjadi string
                              : columnKey === "day"
                              ? new Date(item.date).toLocaleDateString(
                                  undefined,
                                  {
                                    weekday: "long",
                                  }
                                ) // Dapatkan nama hari
                              : getKeyValue(item, columnKey)}
                          </TableCell>
                        )}
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
          <div className="space-y-5  font-poppins text-xl items-start ">
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/assets/saving.png"
                alt=""
                width="250"
                height="250"
                draggable="false"
              />
              <div className="text-xl w-full text-center">
                <h1>Jumlah tabungan saat ini : &nbsp; </h1>
                <h1 className="text-[#FEAE33] text-3xl font-bold">
                  {total ? total : "Rp XXX.XXX,00"}
                </h1>
              </div>
            </div>
            <div className="space-y-5">
              <h1>Masukkan jumlah uang yang ingin ditabung :</h1>
              <div className="flex space-x-5">
                <Input
                  className="w-2/3 text-black"
                  placeholder="Tambahkan nilai, misal Rp 2.000,00"
                  value={nominalAdd}
                  onChange={(e) => setNominalAdd(parseInt(e.target.value))}
                />
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      ref={verifyButtonRef}
                      className="bg-[#FEAE33] text-black font-bold rounded-md px-10 hover:bg-[#E19323] transition-transform duration-300 transform hover:scale-110"
                      onClick={startWebcam} // Memanggil fungsi startWebcam saat tombol diklik
                    >
                      Verifikasi
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-fit h-auto justify-center items-center  ">
                    <DialogHeader>
                      <DialogTitle className="text-3xl">
                        Verifikasi Wajah Orangtua
                      </DialogTitle>
                      <DialogDescription>
                        Posisikan wajah di tengah dan klik capture
                      </DialogDescription>
                    </DialogHeader>

                    {capturedImage ? (
                      <img src={capturedImage} alt="Captured" />
                    ) : (
                      <video
                        id="video"
                        ref={videoRef}
                        className="rounded-3xl bg-black "
                        autoPlay
                        muted
                      />
                    )}

                    <DialogFooter>
                      <Popover>
                        <PopoverTrigger>
                          <Button
                            className="bg-[#FEAE33] text-black font-bold rounded-3xl px-10 hover:bg-[#E19323] transition-transform duration-300 transform hover:scale-110"
                            onClick={() => {
                              stopVideo();
                              stopWebcam();
                              captureImage();
                            }}
                          >
                            {showSpinner ? (
                              <Spinner label="Loading..." color="warning" />
                            ) : verificationSuccess ? (
                              "Verifikasi Berhasil"
                            ) : (
                              "Capture"
                            )}
                          </Button>
                        </PopoverTrigger>
                      </Popover>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
          <div className="absolute z-20 right-0 bottom-0 text-black p-10">
            <Chatbot />
          </div>
        </div>
      </div>
      <video
        ref={videoRef}
        className={`w-1/3 ${videoPlaying ? "block" : "hidden"}`}
        controls
      />
    </main>
  );
};

export default SavingsPage;
