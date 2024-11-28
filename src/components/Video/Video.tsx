import { useQuery } from "@tanstack/react-query";
import ReactPlayer from "react-player/lazy";

import { getFile } from "@/api/queries/getFile";

type Props = { id: string; width?: number; controls: boolean; volume?: number };

export const Video = ({ id, width = 450, controls, volume }: Props) => {
  const { data: file } = useQuery({
    ...getFile.getQueryOptions(id),
    enabled: !!id,
  });

  return (
    <ReactPlayer
      url={file?.result?.key}
      controls={controls}
      width={width}
      volume={volume}
    />
  );
};
