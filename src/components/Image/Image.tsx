import { useQuery } from "@tanstack/react-query";
import { Image as AntImage } from "antd";

import { getFile } from "@/api/queries/getFile";

type Props = { id: string; width?: number; height?: number };

export const Image = ({ id, width = 120, height = 100 }: Props) => {
  const { data: file } = useQuery({
    ...getFile.getQueryOptions(id),
    enabled: !!id,
  });

  return <AntImage width={width} height={height} src={file?.result?.key} />;
};
