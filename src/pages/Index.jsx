import { Container, VStack, Button, Input, Text, useToast, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { FaFileUpload, FaFileDownload } from "react-icons/fa";

const Index = () => {
  const [file, setFile] = useState(null);
  const toast = useToast();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file.type !== "application/pdf") {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setFile(file);
  };

  const handleUpload = () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a PDF file to convert.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    // Here you would typically make an API call to your backend service
    toast({
      title: "File uploaded",
      description: "Your file is being processed.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
    // Reset file input
    setFile(null);
  };

  const handleDownload = () => {
    // Simulate downloading the processed file
    toast({
      title: "Download initiated",
      description: "Your Word document is ready to download.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" padding={4}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">
          Lao PDF to Word Converter
        </Heading>
        <Text>Upload your PDF file to convert it to an editable Word document.</Text>
        <Input type="file" accept="application/pdf" onChange={handleFileChange} placeholder="Upload PDF" size="lg" />
        <Button leftIcon={<FaFileUpload />} colorScheme="blue" onClick={handleUpload} isDisabled={!file}>
          Upload PDF
        </Button>
        <Button leftIcon={<FaFileDownload />} colorScheme="green" onClick={handleDownload}>
          Download Word
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
