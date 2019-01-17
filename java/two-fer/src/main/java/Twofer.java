class Twofer {
    String twofer(String name) {
        String returnName = name != null ? name : "you";
        return "One for " + returnName + ", one for me.";
    }
}
