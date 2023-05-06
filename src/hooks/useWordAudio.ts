import { useState, useEffect } from "react";

export default function useWordAudio(word: Dictionary.Entry) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const audioAvailable = !!audio;

  useEffect(() => {
    const audioSource = getAudioSource();
    setAudio(audioSource);
  }, [word]);

  /**
   * Attempts to parse first available audio source
   * for word pronounciation.
   */
  const getAudioSource = (): HTMLAudioElement | null => {
    const audioSource = word.phonetics.find(({ audio }) => !!audio)?.audio;
    return audioSource ? new Audio(audioSource) : null;
  };

  const playSound = async () => {
    setPlaying(true);

    await new Promise((res) => {
      audio!.play();
      audio!.onended = res;
    });

    setPlaying(false);
  };

  return { audioAvailable, playing, playSound };
}
